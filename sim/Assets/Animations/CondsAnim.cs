using UnityEngine;

public class CondsAnim : MonoBehaviour
{
    public enum Conductors
    {
        Lead,
        Aluminum,
        Iron

    }
    public Conductors currentConductor = Conductors.Lead;
    
    private Animator leadAnimation;
    private Animator aluminiumAnimation;
    private Animator ironAnimation;
    void Start()
    {

        leadAnimation = GameObject.Find("Conductor3").GetComponent<Animator>(); // Lead
        aluminiumAnimation = GameObject.Find("Conductor1").GetComponent<Animator>(); // Aluminum
        ironAnimation = GameObject.Find("Conductor2").GetComponent<Animator>(); // Iron
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                if (hit.collider.gameObject.name == "Conductor1")
                {
                    leadAnimation.SetInteger("ChosenCond", 1);
                    aluminiumAnimation.SetInteger("ChosenCond", 1);
                    ironAnimation.SetInteger("ChosenCond", 1);
                    currentConductor = Conductors.Aluminum;
                }
                if (hit.collider.gameObject.name == "Conductor2")
                {
                    leadAnimation.SetInteger("ChosenCond", 2);
                    aluminiumAnimation.SetInteger("ChosenCond", 2);
                    ironAnimation.SetInteger("ChosenCond", 2);
                    currentConductor = Conductors.Iron;
                }
                if (hit.collider.gameObject.name == "Conductor3")
                {
                    leadAnimation.SetInteger("ChosenCond", 3);
                    aluminiumAnimation.SetInteger("ChosenCond", 3);
                    ironAnimation.SetInteger("ChosenCond", 3);
                    currentConductor = Conductors.Lead;
                }
            }
        }
    }
}
