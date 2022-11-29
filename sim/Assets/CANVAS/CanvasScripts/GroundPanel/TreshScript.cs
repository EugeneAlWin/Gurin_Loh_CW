using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class TreshScript : MonoBehaviour, IPointerClickHandler
{
    internal GameObject table;
    private GameObject[] tableCellsT, TableCellsR;
    private GroundPanel groundPanel;
    private Tasks tasks;

    void Start()
    {
        table = GameObject.Find("Table");
        tableCellsT = GameObject.FindGameObjectsWithTag("TEMPERATURE");
        TableCellsR = GameObject.FindGameObjectsWithTag("RESISTANCE");
        groundPanel = GameObject.Find("GroundTask").GetComponent<GroundPanel>();
        tasks = GameObject.Find("Practice").GetComponent<Tasks>();
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        for (int i = 0; i < tableCellsT.Length; i++)
        {
            tableCellsT[i].GetComponent<Text>().text = "-";
            TableCellsR[i].GetComponent<Text>().text = "-";
            groundPanel.mustToBeClosed = true;
            tasks.state = Tasks.States.Started;
            tasks.currentTask = Tasks.TasksNums.NULL;
        }
    }
}
