using UnityEngine;
using UnityEngine.UI;

public class TableScript : MonoBehaviour
{
    internal GameObject table;
    private GameObject[] tableCellsT, TableCellsR;
    internal Text[] temps, resists;
    void Start()
    {
        table = GameObject.Find("Table");
        tableCellsT = GameObject.FindGameObjectsWithTag("TEMPERATURE");
        TableCellsR = GameObject.FindGameObjectsWithTag("RESISTANCE");
        temps = new Text[tableCellsT.Length];
        resists = new Text[TableCellsR.Length];
        for (int i = 0; i < tableCellsT.Length; i++)
        {
            temps[i] = tableCellsT[i].GetComponent<Text>();
            resists[i] = TableCellsR[i].GetComponent<Text>();
        }
        table.SetActive(true);
    }
}
