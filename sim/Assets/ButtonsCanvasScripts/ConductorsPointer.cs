using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ConductorsPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] private Material material;
    private GameObject[] condParts;
    private Text text;

    void Start()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        condParts = GameObject.FindGameObjectsWithTag("CondShell");

    }
    public void OnPointerEnter(PointerEventData eventData)
    {
        text.text = "Проводники. Через них проходит ток. В данной установке их нужно нагреть и посмотреть на то, как меняется сопротивление.";
        foreach (var part in condParts)
        {
            part.GetComponent<Renderer>().material.color = Color.green;
        }
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = "";
        foreach (var part in condParts)
        {
            part.GetComponent<Renderer>().material = material;
        }
    }

}
