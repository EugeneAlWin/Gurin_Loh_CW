using UnityEngine;

public class CameraScript : MonoBehaviour
{
    [SerializeField] private float scrollSpeed = 10f;
    [SerializeField] private int sensivity = 3;
    [SerializeField] private Transform targetPos;
    private bool move = false;
    private float offset = 0, timer = 0.0f;
    private readonly float speed = 0.001f, waitTime = 0.02f;
    private readonly int maxdistance = 20, mindistance = 1;
    private static readonly float startX = 11.23f, startY = 14.87f, startZ = -188.87f;

    public static readonly Vector3 startPosition = new Vector3(startX, startY, startZ);
    public static readonly Quaternion startRotation = Quaternion.Euler(0, 0, 0);
    private Vector3 currPos = startPosition, needPosition = startPosition;
    private Quaternion currRot = startRotation, needRotation = startRotation;

    //  ФУНКЦИЯ ОГРАНИЧЕНИЯ ПРЕДЕЛОВ ДВИЖЕНИЯ КАМЕРЫ
    private bool ControlDistance(float distance) => distance > mindistance && distance < maxdistance;

    private void Update()
    {
        timer += Time.deltaTime;
        #region Movement
        if (Input.GetMouseButton(1) && !Input.GetMouseButton(2))
        {
            transform.RotateAround(targetPos.position, Vector3.up, Input.GetAxis("Mouse X") * sensivity);
            needPosition = transform.position;
            needRotation = transform.rotation;
        }
        if (Input.GetMouseButton(2) && !Input.GetMouseButton(1))
        {
            transform.RotateAround(targetPos.position, Vector3.right, Input.GetAxis("Mouse Y") * sensivity);
            needPosition = transform.position;
            needRotation = transform.rotation;
        }
        // ДВИЖЕНИЯ КАМЕРЫ В СТОРОНЫ КЛАВИШАМИ

        float x = Input.GetAxis("Horizontal");
        float y = Input.GetAxis("Vertical");
        if (x != 0 || y != 0)
        {
            Vector3 newpos = transform.position + ((transform.TransformDirection(new Vector3(x, 0, 0)) + (Vector3.forward * y)) / sensivity);
            if (ControlDistance(Vector3.Distance(newpos, targetPos.position))) transform.position = newpos;
            needPosition = transform.position;
            needRotation = transform.rotation;
        }

        // ПРИБЛИЖЕНИЕ И УДАЛЕНИЕ КАМЕРЫ ОТ УСТАНОВКИ ПРОКРУТКОЙ КОЛЕСА МЫШИ
        float mouseWheelVal = Input.GetAxis("Mouse ScrollWheel");
        if (mouseWheelVal != 0)
        {
            Vector3 transformDirection = transform.TransformDirection(mouseWheelVal * scrollSpeed * Vector3.up);
            transform.position += transformDirection;
            if (transform.position.y < 13f) transform.position = new Vector3(transform.position.x, 13f, transform.position.z);
            if (transform.position.y > 16f) transform.position = new Vector3(transform.position.x, 16f, transform.position.z);
            needPosition = transform.position;
            needRotation = transform.rotation;
        }
        #endregion
        currPos = transform.position;
        currRot = transform.rotation;
        if (timer > waitTime)
        {
            MoveToElement(needPosition, needRotation);
            timer -= waitTime;
        }
    }

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
    public void SetNeedPosAndRot(Vector3 needPosition, Quaternion needRotation)
    {
        if (currPos != transform.position && currRot != transform.rotation) return;
        this.needPosition = needPosition;
        this.needRotation = needRotation;
        move = true;
    }
}
