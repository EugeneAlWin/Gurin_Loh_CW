using UnityEngine;
using UnityEngine.EventSystems;

public class AddValueScript : MonoBehaviour, IPointerClickHandler
{
    public bool isAddButtonClicked = false;
    public Tasks tasks;

    void Awake()
    {
        tasks = GameObject.Find("Practice").GetComponent<Tasks>();
    }
    public void OnPointerClick(PointerEventData eventData)
    {
        if (tasks.currentTask == Tasks.TasksNums.NULL) return;
        isAddButtonClicked = true;
    }
}
