using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
public class ConductorsPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    private Material leadCond, aluminiumCond, ironCond;
    public Material leadMaterial, aluminiumMaterial, ironMaterial;
    private Text text;
    private CameraScript cs;

    private void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        leadCond = GameObject.Find("Conductor3").GetComponent<Renderer>().material;
        aluminiumCond = GameObject.Find("Conductor2").GetComponent<Renderer>().material;
        ironCond = GameObject.Find("Conductor1").GetComponent<Renderer>().material;
        leadCond.color = Color.white;
        aluminiumCond.color = Color.white;
        ironCond.color = Color.white;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        text.text = "Проводники. Через них проходит ток. В данной установке их нужно нагреть и посмотреть на то, как меняется сопротивление.";
        leadCond.color = Color.green;
        aluminiumCond.color = Color.green;
        ironCond.color = Color.green;
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        // unset color
        leadCond.color = Color.white;
        aluminiumCond.color = Color.white;
        ironCond.color = Color.white;
        text.text = "";
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(new Vector3(10.91f, 14.91f, -186.72f), Quaternion.Euler(24.068f, 4.022f, 0));
    }
}
