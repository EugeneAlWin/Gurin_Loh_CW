using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ThermometerScript : MonoBehaviour
{
    private TextMeshPro thermometer;
    void Start()
    {
        thermometer = GameObject.Find("TempVal").GetComponent<TextMeshPro>();
        thermometer.text = "273.15 °K";
    }
}
