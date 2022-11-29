using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public partial class Tasks : MonoBehaviour, IPointerClickHandler, IPointerEnterHandler
{
    private GameObject practicePanel, groundPanel;
    private Text groundTaskText;
    private AddValueScript addValue;
    private BurnerScript burner;
    private CondsAnim condsAnimClass;
    private InputField inputField;
    private TableScript table;
    public enum States
    {
        Started,
        Continue,
        Completed,
    }
    public States state = States.Started;
    internal TasksNums currentTask = TasksNums.NULL;

    private void Start()
    {
        practicePanel = GameObject.Find("PracticePanel");
        groundPanel = GameObject.Find("GroundTask");
        groundTaskText = GameObject.Find("TaskText").GetComponent<Text>();
        addValue = GameObject.Find("Write").GetComponent<AddValueScript>();
        burner = GameObject.Find("BurnerHand").GetComponent<BurnerScript>();
        condsAnimClass = GameObject.Find("Conductors").GetComponent<CondsAnim>();
        inputField = GameObject.Find("InputField").GetComponent<InputField>();
        table = GameObject.Find("Table").GetComponent<TableScript>();
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        foreach (Transform child in practicePanel.transform)
        {
            child.gameObject.SetActive(true);
        }
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        currentTask = TasksNums.FirstTask;
        groundPanel.SetActive(true);
    }
}
