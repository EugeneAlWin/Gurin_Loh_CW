using UnityEngine;

public partial class CameraScript : MonoBehaviour
{
    private void MoveToElement(Vector3 needPosition, Quaternion needRotation)
    {
        if (move)
        {
            offset += speed;
            transform.SetPositionAndRotation
            (
                Vector3.Lerp(currPos, needPosition, offset),
                Quaternion.Slerp(currRot, needRotation, offset)
            );
            if (offset >= 1)
            {
                move = false;
                offset = 0;
            }
        }
    }
}
