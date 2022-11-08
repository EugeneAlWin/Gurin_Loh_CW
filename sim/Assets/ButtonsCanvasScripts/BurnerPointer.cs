using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class BurnerPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] private Material material;
    private GameObject[] burnerParts;
    private Text text;

    void Start()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        burnerParts = GameObject.FindGameObjectsWithTag("BurnerShell");

    }
    public void OnPointerEnter(PointerEventData eventData)
    {
        text.text = "Горелка. Используется для нагревания проводника";
        foreach (var part in burnerParts)
        {
            part.GetComponent<Renderer>().material.color = Color.green;
        }
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = "";
        foreach (var part in burnerParts)
        {
            part.GetComponent<Renderer>().material = material;
        }
    }
}
