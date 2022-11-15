using UnityEngine;
using UnityEngine.EventSystems;

public class PracticePointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    GameObject a;

    void Awake()
    {
        a = GameObject.Find("PracticePanel");
    }
    void Start()
    {
        a.SetActive(false);
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        a.SetActive(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        a.SetActive(false);
    }
}
