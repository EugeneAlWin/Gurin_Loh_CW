using UnityEngine;
using UnityEngine.UI;

public class TableScript : MonoBehaviour
{
    [SerializeField] private int resAndTempCount;
    internal GameObject table;
    private GameObject[] tableCellsT, TableCellsR;
    internal Text[] temps, resists;
    private ShowTableOnHover showTableOnHover;
    private void Start()
    {
        showTableOnHover = GameObject.Find("ShowTable").GetComponent<ShowTableOnHover>();
        table = GameObject.Find("Table");
        showTableOnHover.table = table;
        tableCellsT = new GameObject[9];
        TableCellsR = new GameObject[9];
        for (byte i = 1; i <= resAndTempCount; i++)
        {
            tableCellsT[i-1] = GameObject.Find("T" + i);
            TableCellsR[i-1] = GameObject.Find("R" + i);
        }

        temps = new Text[tableCellsT.Length];
        resists = new Text[TableCellsR.Length];
        for (int i = 0; i < tableCellsT.Length; i++)
        {
            temps[i] = tableCellsT[i].GetComponent<Text>();
            resists[i] = TableCellsR[i].GetComponent<Text>();
        }
        table.SetActive(false);
    }
}
