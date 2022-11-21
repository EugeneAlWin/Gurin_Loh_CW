using UnityEngine;
using UnityEngine.EventSystems;

public class InstallationPointer : MonoBehaviour, IPointerClickHandler, IPointerEnterHandler
{
    private CameraScript cs;
    private GameObject InstallationPanel;

    private void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
        InstallationPanel = GameObject.Find("InstallationPanel");
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(CameraScript.startPosition, CameraScript.startRotation);
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        foreach (Transform child in InstallationPanel.transform)
        {
            child.gameObject.SetActive(true);
        }
    }
}
