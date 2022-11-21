using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class BurnerPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    [SerializeField] private Material material;
    private GameObject[] burnerParts;
    private Text text;
    private CameraScript cs;
    private string prevText;

    private void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        burnerParts = GameObject.FindGameObjectsWithTag("BurnerShell");
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        prevText = text.text;
        text.text = "Горелка. Используется для нагревания проводника";
        foreach (var part in burnerParts) part.GetComponent<Renderer>().material.color = Color.green;
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = prevText;
        foreach (var part in burnerParts) part.GetComponent<Renderer>().material = material;
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(new Vector3(11.03f, 14.13f, -184.97f), Quaternion.Euler(24.068f, 4.022f, 0));
    }
}
