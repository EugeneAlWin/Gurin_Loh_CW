using UnityEngine;
using UnityEngine.EventSystems;

public class PractiсeButtonPanel : MonoBehaviour, IPointerExitHandler
{
    private void Awake()
    {
        foreach (Transform child in transform)
        {
            child.gameObject.SetActive(false);
        }
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        foreach (Transform child in transform)
        {
            child.gameObject.SetActive(false);
        }
    }
}
