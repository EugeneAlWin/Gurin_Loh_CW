using UnityEngine;
using UnityEngine.EventSystems;

public class Quit : MonoBehaviour, IPointerEnterHandler
{
    public void OnPointerEnter(PointerEventData eventData)
    {
        Application.Quit();
    }
}
