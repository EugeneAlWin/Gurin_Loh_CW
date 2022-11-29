using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public partial class Tasks : MonoBehaviour, IPointerClickHandler, IPointerEnterHandler
{
    private GameObject practicePanel, groundPanel;
    private Text text, groundTaskText;
    private AddValueScript addValue;
    private BurnerScript burner;
    private CondsAnim condsAnimClass;
    public enum States
    {
        Started,
        Continue,
        Completed,
    }
    public States state = States.Started;
    internal TasksNums currentTask = TasksNums.NULL;

    private void Awake()
    {
        text = GameObject.FindGameObjectsWithTag("GT")[0].GetComponent<Text>();
        practicePanel = GameObject.Find("PracticePanel");
        groundPanel = GameObject.Find("GroundTask");
        groundTaskText = GameObject.Find("TaskText").GetComponent<Text>();
        addValue = GameObject.Find("Write").GetComponent<AddValueScript>();
        burner = GameObject.Find("BurnerHand").GetComponent<BurnerScript>();
        condsAnimClass = GameObject.Find("Conductors").GetComponent<CondsAnim>();
        //groundPanel.SetActive(false);
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
    }
}
