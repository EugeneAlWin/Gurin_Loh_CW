using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class OhmmetrPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    [SerializeField] private Material material;
    private GameObject[] ohmParts;
    private Text text;
    private CameraScript cs;
    private string prevText;

    private void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        ohmParts = GameObject.FindGameObjectsWithTag("OhmShell");
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        prevText = text.text;
        text.text = "Омметр. Используется для измерения сопротивления проводника.";
        foreach (GameObject part in ohmParts) part.GetComponent<Renderer>().material.color = Color.green;
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = prevText;
        foreach (GameObject part in ohmParts) part.GetComponent<Renderer>().material = material;
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(new Vector3(13.85f, 14.67f, -184.96f), Quaternion.Euler(51.542f, 4.022f, 2.098f));
    }
}
