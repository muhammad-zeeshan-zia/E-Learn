using System;

public class Person
{
    
    private string name;
    private int age;

  
    public Person(string n, int a)
    {
        name = n;
        age = a;
    }

    
    public Person(string n) 
    {
        name=n;
    }


    public void Display()
    {
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Age: {age}");
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create objects using different constructors
        Person person1 = new Person("Zeeshan", 30);
        Person person2 = new Person("Jawad");
        Person person3 = new Person("Ali", 25);


        Console.WriteLine("Person 1:");
        person1.Display();

        Console.WriteLine("\nPerson 2:");
        person2.Display();

        

    
    }
}
