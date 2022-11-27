using UnityEngine;

public class BurnerScript : MonoBehaviour
{
    [SerializeField] private GameObject fire;
    private ParticleSystem ps;
    public enum BurnerState
    {
        Off,
        Middle,
        Full
    }
    public BurnerState burnerState = BurnerState.Off;
    private void Awake()
    {
        ps = fire.GetComponent<ParticleSystem>();
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
                    switch (burnerState)
                    {
                        case BurnerState.Off:
                            burnerState = BurnerState.Middle;
                            SetFireSize(2.0f);
                            SetRot(90.0f);
                            break;
                        case BurnerState.Middle:
                            burnerState = BurnerState.Full;
                            SetFireSize(3.0f);
                            SetRot(90.0f);
                            break;
                        case BurnerState.Full:
                            burnerState = BurnerState.Off;
                            SetFireSize(0);
                            SetRot(-180.0f);
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
