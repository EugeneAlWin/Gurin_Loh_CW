using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public partial class Tasks : MonoBehaviour, IPointerClickHandler, IPointerEnterHandler
{
    private GameObject PracticePanel;
    private Text text;
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
        PracticePanel = GameObject.Find("PracticePanel");
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        foreach (Transform child in PracticePanel.transform)
        {
            child.gameObject.SetActive(true);
        }
    }

    private TasksNums currentTask = TasksNums.NULL;
    public void OnPointerClick(PointerEventData eventData)
    {
        currentTask = TasksNums.FirstTask;
    }

    private void Task1()
    {
        switch (state)
        {
            case States.Started:
                text.text = "Задание 1. Подключите проводник к источнику напряжения.";
                state = States.Continue;
                break;
            case States.Continue:

                break;
            case States.Completed:
                text.text = "Задание 1. Подключите проводник к источнику напряжения. Проводник подключен. Задание выполнено.";
                Task2();
                state = States.Started;
                break;
        }

        text.text = "Задание 1. Подключите провод к источнику напряжения и измерьте напряжение на проводе.";
    }
    private void Task2()
    {

    }
    private void Task3()
    {

    }
    private void Task4()
    {

    }
    private void Task5()
    {

    }

    private void Task6()
    {

    }
    private void Task7()
    {

    }
    private void Task8()
    {

    }
    private void Task9()
    {

    }
    private void Task10()
    {

    }
    private void Task11()
    {

    }
    private void Task12()
    {

    }
    private void Task13()
    {

    }
    private void Task14()
    {

    }
    private void Task15()
    {

    }
    private void Task16()
    {

    }
}
