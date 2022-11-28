using TMPro;
using UnityEngine;

public class BurnerScript : MonoBehaviour
{
    [SerializeField] private GameObject fire;
    private ParticleSystem ps;
    private TextMeshPro thermVal;

    public enum BurnerState
    {
        Off,
        Middle,
        Full
    }
    public BurnerState currentState = BurnerState.Off;
    private void Awake()
    {
        ps = fire.GetComponent<ParticleSystem>();
        thermVal = GameObject.Find("TempVal").GetComponent<TextMeshPro>();
        thermVal.text = "273 °K";

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
                            currentState = BurnerState.Middle;
                            SetFireSize(2.0f);
                            SetRot(90.0f);
                            thermVal.text = "293 °K";
                            break;
                        case BurnerState.Middle:
                            currentState = BurnerState.Full;
                            SetFireSize(3.0f);
                            SetRot(90.0f);
                            thermVal.text = "313 °K";
                            break;
                        case BurnerState.Full:
                            currentState = BurnerState.Off;
                            SetFireSize(0);
                            SetRot(-180.0f);
                            thermVal.text = "273 °K";
                            break;
                    }
                }
            }
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
