using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class OhmmetrPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] private Material material;
    private GameObject[] ohmParts;
    private Text text;

    void Start()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        ohmParts = GameObject.FindGameObjectsWithTag("OhmShell");

    }
    public void OnPointerEnter(PointerEventData eventData)
    {
        text.text = "Омметр. Используется для измерения сопротивления проводника.";
        foreach (var part in ohmParts)
        {
            part.GetComponent<Renderer>().material.color = Color.green;
        }
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = "";
        foreach (var part in ohmParts)
        {
            part.GetComponent<Renderer>().material = material;
        }
    }

}
