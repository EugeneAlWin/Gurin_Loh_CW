using UnityEngine;
using UnityEngine.UI;

public class GroundPanel : MonoBehaviour
{
    internal Text selectedCondText;
    public bool mustToBeClosed;

    private void Start()
    {
        selectedCondText = GameObject.Find("SelectedCond").GetComponent<Text>();
        mustToBeClosed = true;
    }
}
