using UnityEngine;
using UnityEngine.EventSystems;

public class RefButton : MonoBehaviour, IPointerEnterHandler,IPointerExitHandler
{
    GameObject RefImage;
    void Awake()
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
