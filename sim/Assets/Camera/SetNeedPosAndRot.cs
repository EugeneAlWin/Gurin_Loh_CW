using UnityEngine;

public partial class CameraScript : MonoBehaviour
{
    public void SetNeedPosAndRot(Vector3 needPosition, Quaternion needRotation)
    {
        if (currPos != transform.position && currRot != transform.rotation) return;
        this.needPosition = needPosition;
        this.needRotation = needRotation;
        move = true;
    }
}
