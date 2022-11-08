using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;


public class RackPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] private Material material;
    private GameObject[] rackParts;
    private Text text;
    void Start()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        rackParts = GameObject.FindGameObjectsWithTag("RackShell");
    }
    public void OnPointerEnter(PointerEventData eventData)
    {
        text.text = "Стойка. Используется для того, чтобы удерживать проводник.";
        foreach (var part in rackParts)
        {
            part.GetComponent<Renderer>().material.color = Color.green;
        }
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        text.text = "";
        foreach (var part in rackParts)
        {
            part.GetComponent<Renderer>().material = material;
        }
    }

}
