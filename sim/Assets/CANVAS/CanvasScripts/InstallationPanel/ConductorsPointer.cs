using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
public class ConductorsPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    [SerializeField] private Material material;
    private GameObject[] condParts;
    private Text text;
    private CameraScript cs;
    private string prevText;

    private void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        condParts = GameObject.FindGameObjectsWithTag("CondShell");
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        prevText = text.text;
        text.text = "Проводники. Через них проходит ток. В данной установке их нужно нагреть и посмотреть на то, как меняется сопротивление.";
        foreach (var part in condParts) part.GetComponent<Renderer>().material.color = Color.green;
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = prevText;
        foreach (var part in condParts) part.GetComponent<Renderer>().material = material;
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(new Vector3(10.91f, 14.91f, -186.72f), Quaternion.Euler(24.068f, 4.022f, 0));
    }
}
