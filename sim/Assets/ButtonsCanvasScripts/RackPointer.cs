using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class RackPointer : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    
    [SerializeField] private Material material;
    private GameObject[] rackParts;
    private Text text;
    CameraScript cs;

    void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
    }
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

    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(new Vector3(12.65f, 14.58f, -184.33f), Quaternion.Euler(16.772f, -44.71f, -1.532f));
    }

}
