using UnityEngine;

public partial class CameraScript : MonoBehaviour
{
    private bool ControlDistance(float distance) => distance > mindistance && distance < maxdistance;
}
