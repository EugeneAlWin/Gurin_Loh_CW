using UnityEngine;

public class TableScript : MonoBehaviour
{
    private GameObject table;
    void Awake()
    {
        table = GameObject.Find("Table");
        table.SetActive(false);
    }
}
