﻿using UnityEngine;
using UnityEngine.EventSystems;

public class InstallationPointer : MonoBehaviour, IPointerClickHandler,IPointerEnterHandler, IPointerExitHandler
{
    CameraScript cs;
    GameObject a;

    void Awake()
    {
        cs = GameObject.Find("Main Camera").GetComponent<CameraScript>();
        a = GameObject.Find("InstallationPanel");
    }
    void Start()
    {
        a.SetActive(false);
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        cs.SetNeedPosAndRot(CameraScript.startPosition, CameraScript.startRotation);
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
