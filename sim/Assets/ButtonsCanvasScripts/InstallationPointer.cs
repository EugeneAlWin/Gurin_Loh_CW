
using UnityEngine;
using UnityEngine.EventSystems;

public class InstallationPointer : MonoBehaviour, IPointerClickHandler
{
    CameraScript cs;

    void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(CameraScript.startPosition, CameraScript.startRotation);
    }
}
