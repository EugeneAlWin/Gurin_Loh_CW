using UnityEngine;
using UnityEngine.EventSystems;

public class RefButton : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    private GameObject RefImage;

    private void Awake()
    {
        RefImage = GameObject.Find("RefImage");
        RefImage.SetActive(false);
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        RefImage.SetActive(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        RefImage.SetActive(false);
    }

}
