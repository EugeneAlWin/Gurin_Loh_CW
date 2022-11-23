using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public partial class Tasks : MonoBehaviour, IPointerClickHandler, IPointerEnterHandler
{
    private GameObject practicePanel, groundPanel;
    private Text text, groundTaskText;
    public enum States
    {
        Started,
        Continue,
        Completed,
    }
    public States state = States.Started;

    private void Awake()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        practicePanel = GameObject.Find("PracticePanel");
        groundPanel = GameObject.Find("GroundTask");
        groundTaskText = GameObject.Find("TaskText").GetComponent<Text>();
        groundPanel.SetActive(false);
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        foreach (Transform child in practicePanel.transform)
        {
            child.gameObject.SetActive(true);
        }
    }

    private TasksNums currentTask = TasksNums.NULL;
    public void OnPointerClick(PointerEventData eventData)
    {
        currentTask = TasksNums.FirstTask;
    }
}
