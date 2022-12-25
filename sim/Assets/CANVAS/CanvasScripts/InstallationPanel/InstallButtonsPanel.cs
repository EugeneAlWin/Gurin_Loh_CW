using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class InstallButtonsPanel : MonoBehaviour, IPointerExitHandler
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
        GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>().text = "";
    }
}
