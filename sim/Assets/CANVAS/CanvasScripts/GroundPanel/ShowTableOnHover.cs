using UnityEngine;
using UnityEngine.EventSystems;

public class ShowTableOnHover : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    internal GameObject table;

    public void OnPointerEnter(PointerEventData eventData)
    {
        table.SetActive(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        table.SetActive(false);
    }

    void Start()
    {
        table = GameObject.Find("Table");
    }
}