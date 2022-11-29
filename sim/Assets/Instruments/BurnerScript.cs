using TMPro;
using UnityEngine;

public class BurnerScript : MonoBehaviour
{
    [SerializeField] private GameObject fire;
    private ParticleSystem ps;
    private TextMeshPro thermVal;
    private float currentTemperature = 20.0f;
    public enum BurnerState
    {
        Off = 20,
        Middle = 50,
        Full = 100
    }
    public BurnerState currentState, prevState; 
    private void Awake()
    {
        ps = fire.GetComponent<ParticleSystem>();
        thermVal = GameObject.Find("TempVal").GetComponent<TextMeshPro>();
        currentState = BurnerState.Off;

    }
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            
            if (Physics.Raycast(ray, out RaycastHit hit))
                {
                if (hit.collider.gameObject.name == "BurnerHand")
                {
                    switch (currentState)
                    {
                        case BurnerState.Off:
                            prevState = currentState;
                            currentState = BurnerState.Middle;
                            SetFireSize(2.0f);
                            SetRot(90.0f);
                            break;
                        case BurnerState.Middle:
                            prevState = currentState;
                            currentState = BurnerState.Full;
                            SetFireSize(3.0f);
                            SetRot(90.0f);
                            break;
                        case BurnerState.Full:
                            prevState = currentState;
                            currentState = BurnerState.Off;
                            SetFireSize(0);
                            SetRot(-180.0f);
                            break;
                    }
                }
            }
        }
        switch (currentState)
        {
            case BurnerState.Off:
                currentTemperature = Mathf.Lerp(currentTemperature, 20, 2.0f * Time.deltaTime);
                thermVal.text = $"{currentTemperature:f1} °C";
                break;
            case BurnerState.Middle:
                currentTemperature = Mathf.Lerp(currentTemperature, 50, 2.0f * Time.deltaTime);
                thermVal.text = $"{currentTemperature:f1} °C";
                break;
            case BurnerState.Full:
                currentTemperature = Mathf.Lerp(currentTemperature, 100, 2.0f * Time.deltaTime);
                thermVal.text = $"{currentTemperature:f1} °C";
                break;
        }
    }
    private void SetFireSize(float size)
    {
        var fireSize = ps.main;
        fireSize.startSize = size;
    }
    private void SetRot(float Zrot)
    {
        transform.Rotate(0, 0, Zrot);
    }
}
