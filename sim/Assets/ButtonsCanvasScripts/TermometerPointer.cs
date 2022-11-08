using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class TermometerPointer : MonoBehaviour, IPointerEnterHandler,IPointerExitHandler
{
    [SerializeField] private Material material;
    private GameObject[] termomParts;
    private Text text;

    void Start()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        termomParts = GameObject.FindGameObjectsWithTag("ThermShell");

    }
    public void OnPointerEnter(PointerEventData eventData)
    {
        text.text = "Термометр. Используется для измерения температуры проводника.";
        foreach (var part in termomParts)
        {
            part.GetComponent<Renderer>().material.color = Color.green;
        }
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = "";
        foreach (var part in termomParts)
        {
            part.GetComponent<Renderer>().material = material;
        }
    }

}
