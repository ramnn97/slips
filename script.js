// Slip data structure with all 30 slips
const slips = [
    {
        id: 1,
        programs: [
            {
                title: "Core Java A — Display characters A to Z",
                language: "java",
                filename: "AtoZ.java",
                code: `public class AtoZ {
    public static void main(String[] args) {
        for(char c='A'; c<='Z'; c++){
            System.out.print(c + " ");
        }
        System.out.println();
    }
}`
            },
            {
                title: "Core Java B — Copy only non-numeric data from one file to another",
                language: "java",
                filename: "CopyNonNumeric.java",
                code: `import java.io.*;
public class CopyNonNumeric {
    public static void main(String[] args) throws IOException {
        if(args.length < 2) {
            System.out.println("Usage: java CopyNonNumeric sourceFile targetFile");
            return;
        }
        try(BufferedReader br = new BufferedReader(new FileReader(args[0]));
            BufferedWriter bw = new BufferedWriter(new FileWriter(args[1]))) {
            int ch;
            while((ch = br.read()) != -1) {
                if(!Character.isDigit(ch)) bw.write(ch);
            }
        }
        System.out.println("Done.");
    }
}`
            },
            {
                title: "Python A — Accept n numbers and remove duplicates",
                language: "python",
                filename: "remove_duplicates.py",
                code: `def remove_duplicates(nums):
    # maintain input order
    seen = set()
    res = []
    for x in nums:
        if x not in seen:
            seen.add(x)
            res.append(x)
    return res

if __name__ == "__main__":
    n = int(input("n: "))
    arr = list(map(int, input("numbers: ").split()))
    print(remove_duplicates(arr))`
            },
            {
                title: "Python B — Tkinter GUI: accept birthdate and output age",
                language: "python",
                filename: "age_from_birthdate.py",
                code: `import tkinter as tk
from tkinter import messagebox
from datetime import date, datetime

def calculate_age():
    try:
        bd = datetime.strptime(entry.get(), "%Y-%m-%d").date()
        today = date.today()
        age = today.year - bd.year - ((today.month, today.day) < (bd.month, bd.day))
        messagebox.showinfo("Age", f"You are {age} years old.")
    except Exception as e:
        messagebox.showerror("Error", "Enter date as YYYY-MM-DD")

root = tk.Tk(); root.title("Age Calculator")
tk.Label(root, text="Birthdate (YYYY-MM-DD)").pack()
entry = tk.Entry(root); entry.pack()
tk.Button(root, text="Get Age", command=calculate_age).pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 2,
        programs: [
            {
                title: "Core Java A — Display all vowels from a given string",
                language: "java",
                filename: "Vowels.java",
                code: `public class Vowels {
    public static void main(String[] args) {
        String s = "This is Example String";
        s = s.toLowerCase();
        for(char c: s.toCharArray()) {
            if("aeiou".indexOf(c) != -1) System.out.print(c + " ");
        }
        System.out.println();
    }
}`
            },
            {
                title: "Core Java B — Handle MOUSEMOVED and MOUSECLICK and display click position in TextField (AWT)",
                language: "java",
                filename: "MouseDemo.java",
                code: `import java.awt.*;
import java.awt.event.*;
public class MouseDemo extends Frame implements MouseMotionListener, MouseListener {
    TextField tf;
    MouseDemo() {
        setLayout(new FlowLayout());
        tf = new TextField(20);
        add(tf);
        addMouseListener(this);
        addMouseMotionListener(this);
        setSize(400,300);
        setVisible(true);
        addWindowListener(new WindowAdapter(){ public void windowClosing(WindowEvent e){ dispose(); }});
    }
    public void mouseMoved(MouseEvent e){ setTitle("Moved: " + e.getX() + "," + e.getY()); }
    public void mouseDragged(MouseEvent e){}
    public void mouseClicked(MouseEvent e){ tf.setText("Clicked at: " + e.getX() + "," + e.getY()); }
    public void mousePressed(MouseEvent e){} public void mouseReleased(MouseEvent e){}
    public void mouseEntered(MouseEvent e){} public void mouseExited(MouseEvent e){}
    public static void main(String[] args){ new MouseDemo(); }
}`
            },
            {
                title: "Python A — Count upper and lower case letters",
                language: "python",
                filename: "count_case.py",
                code: `def count_case(s):
    lower = sum(1 for c in s if c.islower())
    upper = sum(1 for c in s if c.isupper())
    return upper, lower

if __name__ == "__main__":
    s = input("Enter string: ")
    up, low = count_case(s)
    print(f"Upper: {up}, Lower: {low}")`
            },
            {
                title: "Python B — Digital clock with Tkinter",
                language: "python",
                filename: "digital_clock.py",
                code: `import tkinter as tk
import time

def update():
    label.config(text=time.strftime("%H:%M:%S"))
    label.after(1000, update)

root = tk.Tk(); root.title("Digital Clock")
label = tk.Label(root, font=("Helvetica", 48))
label.pack()
update()
root.mainloop()`
            }
        ]
    },
    {
        id: 3,
        programs: [
            {
                title: "Core Java A — Armstrong check using static",
                language: "java",
                filename: "ArmstrongStatic.java",
                code: `public class ArmstrongStatic {
    static boolean isArmstrong(int n) {
        int tmp = n, sum = 0;
        while(tmp>0){
            int d = tmp%10;
            sum += d*d*d;
            tmp/=10;
        }
        return sum==n;
    }
    public static void main(String[] args){
        int n = 153; // example
        System.out.println(n + " is Armstrong? " + isArmstrong(n));
    }
}`
            },
            {
                title: "Core Java B — Abstract Shape, Cone and Cylinder, use super",
                language: "java",
                filename: "ShapeDemo.java",
                code: `abstract class Shape {
    abstract double area();
    abstract double volume();
}

class Cone extends Shape {
    double r, h;
    Cone(double r, double h){ this.r=r; this.h=h;}
    public double area(){ return Math.PI*r*(r + Math.sqrt(h*h + r*r)); }
    public double volume(){ return (1.0/3.0)*Math.PI*r*r*h; }
}

class Cylinder extends Shape {
    double r, h;
    Cylinder(double r, double h){ this.r=r; this.h=h;}
    public double area(){ return 2*Math.PI*r*(r+h); }
    public double volume(){ return Math.PI*r*r*h; }
}

public class ShapeDemo {
    public static void main(String[] args){
        Shape c = new Cone(3,4);
        Shape cy = new Cylinder(3,5);
        System.out.println("Cone area: "+c.area()+" vol: "+c.volume());
        System.out.println("Cylinder area: "+cy.area()+" vol: "+cy.volume());
    }
}`
            },
            {
                title: "Python A — Check key in dict and replace with another key-value",
                language: "python",
                filename: "dict_replace.py",
                code: `def replace_key(d, old_key, new_key, new_value):
    if old_key in d:
        del d[old_key]
        d[new_key] = new_value
    return d

if __name__=="__main__":
    d = {'a':1,'b':2}
    print(replace_key(d,'a','x',100))`
            },
            {
                title: "Python B — Student and Test classes",
                language: "python",
                filename: "student_test.py",
                code: `class Student:
    def __init__(self, roll, name, age, gender):
        self.roll, self.name, self.age, self.gender = roll, name, age, gender

class Test(Student):
    def __init__(self, roll, name, age, gender, marks):
        super().__init__(roll, name, age, gender)
        self.marks = marks
    def total(self):
        return sum(self.marks)
    def display(self):
        print(self.roll, self.name, self.age, self.gender, self.marks, "Total:", self.total())

if __name__ == "__main__":
    t1 = Test(1,"A",20,"M",[80,90,70])
    t2 = Test(2,"B",21,"F",[60,75,85])
    t3 = Test(3,"C",19,"M",[88,77,66])
    for t in (t1,t2,t3): t.display()`
            }
        ]
    },
    {
        id: 4,
        programs: [
            {
                title: "Core Java A — Display alternate characters from a string",
                language: "java",
                filename: "AlternateChars.java",
                code: `public class AlternateChars {
    public static void main(String[] args) {
        String s = "abcdefg";
        for(int i=0;i<s.length();i+=2) System.out.print(s.charAt(i));
        System.out.println();
    }
}`
            },
            {
                title: "Core Java B — Applet arithmetic calculator (simple AWT Frame since applets deprecated)",
                language: "java",
                filename: "CalculatorFrame.java",
                code: `import java.awt.*;
import java.awt.event.*;
public class CalculatorFrame extends Frame implements ActionListener {
    TextField a,b,res; Button add,sub,mul,div;
    CalculatorFrame(){
        setLayout(new FlowLayout());
        a=new TextField(5); b=new TextField(5); res=new TextField(10);
        add=new Button("+"); sub=new Button("-"); mul=new Button("*"); div=new Button("/");
        add(a); add(b); add(add); add(sub); add(mul); add(div); add(res);
        add.addActionListener(this); sub.addActionListener(this);
        mul.addActionListener(this); div.addActionListener(this);
        setSize(400,120); setVisible(true);
        addWindowListener(new WindowAdapter(){ public void windowClosing(WindowEvent e){ dispose(); }});
    }
    public void actionPerformed(ActionEvent e){
        try{
            double x=Double.parseDouble(a.getText()), y=Double.parseDouble(b.getText()), r=0;
            String cmd=e.getActionCommand();
            switch(cmd){ case "+": r=x+y; break; case "-": r=x-y; break; case "*": r=x*y; break; case "/": r=x/y; break; }
            res.setText(String.valueOf(r));
        }catch(Exception ex){ res.setText("Error"); }
    }
    public static void main(String[] args){ new CalculatorFrame(); }
}`
            },
            {
                title: "Python A — Tkinter GUI: background changing colors",
                language: "python",
                filename: "bg_changer.py",
                code: `import tkinter as tk
import itertools

colors = ["red","green","blue","yellow","cyan","magenta","white"]
def change():
    root.config(bg=next(cycle))
    root.after(500, change)

root = tk.Tk(); root.geometry("300x200")
cycle = itertools.cycle(colors)
root.after(0, change)
root.mainloop()`
            },
            {
                title: "Python B — Employee and Manager, display manager with max total salary",
                language: "python",
                filename: "manager_max.py",
                code: `class Employee:
    def __init__(self, id, name, dept, sal):
        self.id, self.name, self.dept, self.sal = id, name, dept, sal

class Manager(Employee):
    def __init__(self, id, name, dept, sal, bonus):
        super().__init__(id, name, dept, sal)
        self.bonus = bonus
    def total(self): return self.sal + self.bonus

if __name__ == "__main__":
    m = [Manager(1,"A","HR",50000,5000), Manager(2,"B","IT",60000,10000)]
    top = max(m, key=lambda x: x.total())
    print(top.name, top.total())`
            }
        ]
    },
    {
        id: 5,
        programs: [
            {
                title: "Core Java A — Display pattern",
                language: "java",
                filename: "Pattern5.java",
                code: `public class Pattern5 {
    public static void main(String[] args){
        for(int i=5;i>=1;i--){
            for(int j=i;j<=5;j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}`
            },
            {
                title: "Core Java B — Delete .txt files from command-line list; display remaining with name, location, size",
                language: "java",
                filename: "FilterFiles.java",
                code: `import java.io.*;
import java.nio.file.*;
public class FilterFiles {
    public static void main(String[] args) {
        for(String name : args){
            if(name.endsWith(".txt")){
                File f = new File(name);
                if(f.exists()) f.delete();
            } else {
                File f = new File(name);
                if(f.exists()){
                    System.out.println("Name: "+f.getName());
                    System.out.println("Path: "+f.getAbsolutePath());
                    System.out.println("Size: "+f.length());
                } else System.out.println(name + " not found");
            }
        }
    }
}`
            },
            {
                title: "Python A — Class with getString and printString (uppercase)",
                language: "python",
                filename: "string_class.py",
                code: `class S:
    def __init__(self): self.s = ""
    def getString(self): self.s = input("Enter: ")
    def printString(self): print(self.s.upper())

if __name__ == "__main__":
    obj = S(); obj.getString(); obj.printString()`
            },
            {
                title: "Python B — Fibonacci generator",
                language: "python",
                filename: "fib_gen.py",
                code: `def fib(n):
    a,b=0,1
    for _ in range(n):
        yield a
        a,b = b, a+b

if __name__ == "__main__":
    for x in fib(10): print(x, end=" ")
    print()`
            }
        ]
    },
    {
        id: 6,
        programs: [
            {
                title: "Core Java A — If zero throw custom Exception \"Number Is Zero\", else sum first+last digit; use static",
                language: "java",
                filename: "SumFirstLast.java",
                code: `class NumberIsZeroException extends Exception {
    NumberIsZeroException(String msg){ super(msg); }
}
public class SumFirstLast {
    static int sumFirstLast(int n) throws NumberIsZeroException {
        if(n==0) throw new NumberIsZeroException("Number Is Zero");
        int last = Math.abs(n)%10;
        int first = Math.abs(n);
        while(first >= 10) first /= 10;
        return first + last;
    }
    public static void main(String[] args) throws Exception {
        System.out.println(sumFirstLast(Integer.parseInt(args.length>0?args[0]:"1234")));
    }
}`
            },
            {
                title: "Core Java B — Transpose of a matrix",
                language: "java",
                filename: "Transpose.java",
                code: `public class Transpose {
    public static void main(String[] args){
        int[][] a = {{1,2,3},{4,5,6}};
        int r = a.length, c = a[0].length;
        int[][] t = new int[c][r];
        for(int i=0;i<r;i++) for(int j=0;j<c;j++) t[j][i] = a[i][j];
        for(int i=0;i<c;i++){
            for(int j=0;j<r;j++) System.out.print(t[i][j]+" ");
            System.out.println();
        }
    }
}`
            },
            {
                title: "Python A — Package to calculate area and volume of cube and sphere",
                language: "python",
                filename: "shapes/solid.py",
                code: `import math
def cube_area_volume(side):
    surface = 6*side*side
    volume = side**3
    return surface, volume

def sphere_area_volume(r):
    surface = 4*math.pi*r*r
    volume = (4/3)*math.pi*r**3
    return surface, volume`
            },
            {
                title: "Python B — Label font style change with checkbuttons",
                language: "python",
                filename: "font_style.py",
                code: `import tkinter as tk
from tkinter import font

def update():
    style = ("Helvetica", size_var.get(), "bold" if bold_var.get() else "normal")
    lbl.config(font=style)

root = tk.Tk()
size_var = tk.IntVar(value=12)
bold_var = tk.IntVar()
tk.Label(root,text="Sample").pack()
lbl = tk.Label(root,text="Hello")
lbl.pack()
tk.Checkbutton(root,text="Bold",variable=bold_var,command=update).pack()
tk.Spinbox(root, from_=8, to=48, textvariable=size_var, command=update).pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 7,
        programs: [
            {
                title: "Core Java A — Label with text, red background, font size 20 on Frame (AWT)",
                language: "java",
                filename: "LabelDemo.java",
                code: `import java.awt.*;
public class LabelDemo extends Frame {
    public LabelDemo(){
        Label l = new Label("Dr. D Y Patil College");
        l.setFont(new Font("Arial", Font.PLAIN, 20));
        l.setBackground(Color.RED);
        add(l);
        setSize(400,100);
        setVisible(true);
        addWindowListener(new java.awt.event.WindowAdapter(){ public void windowClosing(java.awt.event.WindowEvent e){ dispose(); }});
    }
    public static void main(String[] args){ new LabelDemo(); }
}`
            },
            {
                title: "Core Java B — Cricket players average and display max using array of objects",
                language: "java",
                filename: "PlayerAvg.java",
                code: `class Player {
    int pid, totalRuns, innings, notOut;
    String pname;
    Player(int pid,String pname,int totalRuns,int innings,int notOut){
        this.pid=pid; this.pname=pname; this.totalRuns=totalRuns; this.innings=innings; this.notOut=notOut;
    }
    double avg(){
        int outs = innings - notOut;
        return outs==0 ? totalRuns : (double)totalRuns/outs;
    }
}

public class PlayerAvg {
    public static void main(String[] args){
        Player[] p = {
            new Player(1,"A",1000,30,2),
            new Player(2,"B",1200,35,5)
        };
        Player best = p[0];
        for(Player pl: p) if(pl.avg() > best.avg()) best = pl;
        System.out.println("Best: " + best.pname + " avg: " + best.avg());
    }
}`
            },
            {
                title: "Python A — Complex number addition via operator overloading",
                language: "python",
                filename: "complex_add.py",
                code: `class MyComplex:
    def __init__(self, r, i): self.r, self.i = r, i
    def __add__(self, other): return MyComplex(self.r+other.r, self.i+other.i)
    def __str__(self): return f"{self.r}+{self.i}j"

if __name__=="__main__":
    a = MyComplex(1,2); b = MyComplex(3,4)
    print(a+b)`
            },
            {
                title: "Python B — Random password generator GUI",
                language: "python",
                filename: "password_generator.py",
                code: `import tkinter as tk, random, string
def gen():
    length = int(spin.get())
    pwd = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))
    entry.delete(0,tk.END); entry.insert(0,pwd)

root = tk.Tk()
spin = tk.Spinbox(root, from_=6, to=24)
spin.pack()
tk.Button(root, text="Generate", command=gen).pack()
entry = tk.Entry(root, width=30); entry.pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 8,
        programs: [
            {
                title: "Core Java A — Interface Shape with area(); Circle and Sphere; use final",
                language: "java",
                filename: "ShapeInterface.java",
                code: `interface Shape { double area(); }
final class Circle implements Shape {
    double r; Circle(double r){ this.r=r; }
    public double area(){ return Math.PI*r*r; }
}
final class Sphere implements Shape {
    double r; Sphere(double r){ this.r=r; }
    public double area(){ return 4*Math.PI*r*r; }
}
public class ShapeInterface {
    public static void main(String[] args){
        Shape c = new Circle(3);
        Shape s = new Sphere(3);
        System.out.println(c.area());
        System.out.println(s.area());
    }
}`
            },
            {
                title: "Core Java B — Display files with .txt from directory",
                language: "java",
                filename: "ShowTxtFiles.java",
                code: `import java.io.File;
public class ShowTxtFiles {
    public static void main(String[] args){
        File dir = new File(args.length>0?args[0]:".");
        File[] files = dir.listFiles((d,name)-> name.endsWith(".txt"));
        if(files!=null) for(File f: files) System.out.println(f.getName());
    }
}`
            },
            {
                title: "Python A — Find repeated items in a tuple",
                language: "python",
                filename: "repeated_in_tuple.py",
                code: `def repeats(t):
    from collections import Counter
    return [x for x,c in Counter(t).items() if c>1]

print(repeats((1,2,3,2,4,1)))`
            },
            {
                title: "Python B — getString/printString upper, reverse word by word and print lower",
                language: "python",
                filename: "str_ops.py",
                code: `class S:
    def __init__(self): self.s = ""
    def getString(self): self.s = input()
    def printString(self): print(self.s.upper())
    def reverse_words_lower(self):
        print(" ".join(self.s.split()[::-1]).lower())

if __name__=="__main__":
    s=S(); s.getString(); s.printString(); s.reverse_words_lower()`
            }
        ]
    },
    {
        id: 9,
        programs: [
            {
                title: "Core Java A — Display pattern 1 0 1 0 ... (10 terms)",
                language: "java",
                filename: "Pattern1010.java",
                code: `public class Pattern1010 {
    public static void main(String[] args){
        for(int i=0;i<10;i++) System.out.print((i%2==0?1:0) + " ");
        System.out.println();
    }
}`
            },
            {
                title: "Core Java B — Validate PAN and Mobile, throw \"Invalid Data\"",
                language: "java",
                filename: "ValidateData.java",
                code: `class InvalidDataException extends Exception { InvalidDataException(String m){ super(m); } }
public class ValidateData {
    static void validate(String pan, String mob) throws InvalidDataException {
        if(!pan.matches("[A-Z]{5}[0-9]{4}[A-Z]")) throw new InvalidDataException("Invalid PAN");
        if(!mob.matches("[6-9][0-9]{9}")) throw new InvalidDataException("Invalid Mobile");
        System.out.println("PAN: "+pan+" Mobile: "+mob);
    }
    public static void main(String[] args) throws Exception {
        validate("ABCDE1234F","9876543210");
    }
}`
            },
            {
                title: "Python A — Reverse string word by word",
                language: "python",
                filename: "reverse_words.py",
                code: `def rev_wordwise(s): return " ".join(s.split()[::-1])
print(rev_wordwise("hello world from python"))`
            },
            {
                title: "Python B — GUI: n, check Prime/Perfect/Armstrong using radio buttons",
                language: "python",
                filename: "check_number_gui.py",
                code: `import tkinter as tk, math
def check():
    n = int(entry.get())
    mode = var.get()
    if mode=="Prime":
        if n>1 and all(n%i for i in range(2,int(math.sqrt(n))+1)): res="Prime"
        else: res="Not Prime"
    elif mode=="Perfect":
        s = sum(i for i in range(1,n) if n%i==0)
        res = "Perfect" if s==n else "Not Perfect"
    else:
        s = sum(int(d)**len(str(n)) for d in str(n))
        res = "Armstrong" if s==n else "Not Armstrong"
    lbl.config(text=res)

root = tk.Tk()
entry = tk.Entry(root); entry.pack()
var=tk.StringVar(value="Prime")
for t in ("Prime","Perfect","Armstrong"):
    tk.Radiobutton(root,text=t,variable=var,value=t).pack(anchor='w')
tk.Button(root,text="Check",command=check).pack()
lbl=tk.Label(root,text=""); lbl.pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 10,
        programs: [
            {
                title: "Core Java A — Count frequency of each character in a string",
                language: "java",
                filename: "CharFreq.java",
                code: `import java.util.*;
public class CharFreq {
    public static void main(String[] args){
        String s = "hello world";
        Map<Character,Integer> m=new LinkedHashMap<>();
        for(char c: s.toCharArray()){
            m.put(c, m.getOrDefault(c,0)+1);
        }
        m.forEach((k,v)-> System.out.println(k+"-"+v));
    }
}`
            },
            {
                title: "Core Java B — As specified in slip (placeholder)",
                language: "java",
                filename: "Slip10B.java",
                code: `public class Slip10B {
    public static void main(String[] args){
        System.out.println("Implement specific requirement from slip 10B.");
    }
}`
            },
            {
                title: "Python A — GUI show alert on button press",
                language: "python",
                filename: "show_alert.py",
                code: `import tkinter as tk, tkinter.messagebox as mb
root = tk.Tk()
tk.Button(root, text="Alert", command=lambda: mb.showinfo("Alert","Button pressed")).pack()
root.mainloop()`
            },
            {
                title: "Python B — Validity of parentheses (stack)",
                language: "python",
                filename: "valid_parentheses.py",
                code: `def is_valid(s):
    stack=[]
    pairs = {')':'(', ']':'[', '}':'{'}
    for ch in s:
        if ch in "([{": stack.append(ch)
        elif ch in ")]}":
            if not stack or stack.pop()!=pairs[ch]: return False
    return not stack

print(is_valid("()[]{}"))`
            }
        ]
    },
    {
        id: 11,
        programs: [
            {
                title: "Core Java A — Menu-driven using command line args for arithmetic",
                language: "java",
                filename: "MenuCLI.java",
                code: `public class MenuCLI {
    public static void main(String[] args){
        if(args.length<3){ System.out.println("Usage: op a b"); return; }
        String op = args[0]; double a=Double.parseDouble(args[1]), b=Double.parseDouble(args[2]);
        switch(op){
            case "add": System.out.println(a+b); break;
            case "sub": System.out.println(a-b); break;
            case "mul": System.out.println(a*b); break;
            case "div": System.out.println(a/b); break;
            default: System.out.println("Unknown op");
        }
    }
}`
            },
            {
                title: "Core Java B — Applet/table lamp color changes randomly",
                language: "java",
                filename: "LampDemo.java",
                code: `import java.awt.*; import java.awt.event.*;
import java.util.Random;
public class LampDemo extends Frame {
    Panel lamp = new Panel();
    Random r = new Random();
    LampDemo(){
        setLayout(new FlowLayout());
        lamp.setBackground(Color.YELLOW); lamp.setPreferredSize(new Dimension(100,150));
        add(lamp);
        Button b = new Button("Change"); add(b);
        b.addActionListener(e-> lamp.setBackground(new Color(r.nextInt(256),r.nextInt(256),r.nextInt(256))));
        setSize(300,300); setVisible(true);
        addWindowListener(new WindowAdapter(){ public void windowClosing(WindowEvent e){ dispose(); }});
    }
    public static void main(String[] args){ new LampDemo(); }
}`
            },
            {
                title: "Python A — Element-wise sum of tuples",
                language: "python",
                filename: "tuple_sum.py",
                code: `from itertools import zip_longest
tuples = [(1,2,3,4),(3,5,2,1),(2,2,3,1)]
res = tuple(sum(x) for x in zip(*tuples))
print(res)`
            },
            {
                title: "Python B — Menu bar with color names to change background",
                language: "python",
                filename: "menu_bg.py",
                code: `import tkinter as tk
def set_bg(color): root.config(bg=color)
root = tk.Tk()
menubar = tk.Menu(root)
color_menu = tk.Menu(menubar, tearoff=0)
for c in ["red","green","blue","white"]:
    color_menu.add_command(label=c, command=lambda col=c: set_bg(col))
menubar.add_cascade(label="Colors", menu=color_menu)
root.config(menu=menubar)
root.mainloop()`
            }
        ]
    },
    {
        id: 12,
        programs: [
            {
                title: "Core Java A — Reverse each string in array",
                language: "java",
                filename: "ReverseArrayStrings.java",
                code: `public class ReverseArrayStrings {
    public static void main(String[] args){
        String[] arr = {"hello","world"};
        for(String s: arr){
            System.out.println(new StringBuilder(s).reverse().toString());
        }
    }
}`
            },
            {
                title: "Core Java B — Display multiplication table in List box on button click (Swing)",
                language: "java",
                filename: "TableList.java",
                code: `import javax.swing.*;
import java.awt.event.*;
public class TableList {
    public static void main(String[] args){
        JFrame f = new JFrame("Table");
        DefaultListModel<String> model = new DefaultListModel<>();
        JList<String> list = new JList<>(model);
        JTextField tf = new JTextField(5);
        JButton b = new JButton("Show");
        b.addActionListener(e->{
            model.clear();
            int n = Integer.parseInt(tf.getText());
            for(int i=1;i<=10;i++) model.addElement(n + " x " + i + " = " + (n*i));
        });
        f.setLayout(new java.awt.FlowLayout());
        f.add(tf); f.add(b); f.add(new JScrollPane(list));
        f.setSize(300,300); f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}`
            },
            {
                title: "Python A — Tkinter label font style (duplicate of previous) — see Slip 6/23/12",
                language: "python",
                filename: "font_style.py",
                code: `import tkinter as tk
from tkinter import font

def update():
    style = ("Helvetica", size_var.get(), "bold" if bold_var.get() else "normal")
    lbl.config(font=style)

root = tk.Tk()
size_var = tk.IntVar(value=12)
bold_var = tk.IntVar()
tk.Label(root,text="Sample").pack()
lbl = tk.Label(root,text="Hello")
lbl.pack()
tk.Checkbutton(root,text="Bold",variable=bold_var,command=update).pack()
tk.Spinbox(root, from_=8, to=48, textvariable=size_var, command=update).pack()
root.mainloop()`
            },
            {
                title: "Python B — Count repeated characters in string",
                language: "python",
                filename: "count_repeats.py",
                code: `from collections import Counter
s = "thequickbrownfoxjumpsoverthelazydog"
c = Counter(s)
for k,v in c.items():
    if v>1: print(f"{k}-{v}")`
            }
        ]
    },
    {
        id: 13,
        programs: [
            {
                title: "Core Java A — Store n integers in ArrayList and display in reverse",
                language: "java",
                filename: "ReverseArrayList.java",
                code: `import java.util.*;
public class ReverseArrayList {
    public static void main(String[] args){
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1,2,3,4));
        Collections.reverse(list);
        System.out.println(list);
    }
}`
            },
            {
                title: "Core Java B — Greet by name uppercase",
                language: "java",
                filename: "GreetUpper.java",
                code: `import java.util.*;
public class GreetUpper {
    public static void main(String[] args){
        String name = "Raj";
        System.out.println("Hello, " + name.toUpperCase() + ", nice to meet you!");
    }
}`
            },
            {
                title: "Python A — Exception handling for positive integer input",
                language: "python",
                filename: "positive_check.py",
                code: `def accept_positive():
    try:
        n = int(input("Enter positive: "))
        if n<=0: raise ValueError("Not positive")
        print("Correct input")
    except Exception as e:
        print("Incorrect input:", e)

accept_positive()`
            },
            {
                title: "Python B — Implement queue using list",
                language: "python",
                filename: "queue_list.py",
                code: `class Queue:
    def __init__(self): self.q=[]
    def enqueue(self,x): self.q.append(x)
    def dequeue(self): return self.q.pop(0) if self.q else None
q=Queue(); q.enqueue(1); q.enqueue(2); print(q.dequeue())`
            }
        ]
    },
    {
        id: 14,
        programs: [
            {
                title: "Core Java A — Power using recursion",
                language: "java",
                filename: "PowerRec.java",
                code: `public class PowerRec {
    static double pow(double x, int n){
        if(n==0) return 1;
        return x * pow(x, n-1);
    }
    public static void main(String[] args){ System.out.println(pow(2,5)); }
}`
            },
            {
                title: "Core Java B — Accept employee details and display on next frame using event (Swing)",
                language: "java",
                filename: "EmployeeFrame.java",
                code: `import javax.swing.*;
import java.awt.event.*;
public class EmployeeFrame {
    public static void main(String[] args){
        JFrame f1 = new JFrame("Input");
        JTextField eno = new JTextField(5), ename = new JTextField(10), sal = new JTextField(8);
        JButton submit = new JButton("Show");
        submit.addActionListener(e->{
            JFrame f2 = new JFrame("Details");
            f2.setLayout(new java.awt.FlowLayout());
            f2.add(new JLabel("Eno: "+eno.getText()));
            f2.add(new JLabel("Name: "+ename.getText()));
            f2.add(new JLabel("Sal: "+sal.getText()));
            f2.setSize(300,200); f2.setVisible(true);
        });
        f1.setLayout(new java.awt.FlowLayout());
        f1.add(eno); f1.add(ename); f1.add(sal); f1.add(submit);
        f1.setSize(400,100); f1.setVisible(true); f1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}`
            },
            {
                title: "Python A — Cylinder surface area and volume (Tkinter)",
                language: "python",
                filename: "cylinder_gui.py",
                code: `import tkinter as tk, math
def calc():
    r=float(e1.get()); h=float(e2.get())
    sa = 2*math.pi*r*(r+h); vol = math.pi*r*r*h
    res.config(text=f"Surface: {sa:.2f} Vol: {vol:.2f}")

root=tk.Tk()
e1=tk.Entry(root); e2=tk.Entry(root)
e1.pack(); e2.pack()
tk.Button(root,text="Calc",command=calc).pack()
res=tk.Label(root,text=""); res.pack()
root.mainloop()`
            },
            {
                title: "Python B — Caesar encryption (plain + cipher)",
                language: "python",
                filename: "caesar.py",
                code: `def caesar(s, shift=3):
    res = []
    for ch in s:
        if ch.isalpha():
            base = 'A' if ch.isupper() else 'a'
            res.append(chr((ord(ch)-ord(base)+shift)%26 + ord(base)))
        else: res.append(ch)
    return ''.join(res)

print(caesar("hello",3))`
            }
        ]
    },
    {
        id: 15,
        programs: [
            {
                title: "Core Java A — Search name in array and show index or message",
                language: "java",
                filename: "SearchName.java",
                code: `import java.util.*;
public class SearchName {
    public static void main(String[] args){
        String[] arr = {"Ram","Shyam","Mohan"};
        String key = "Mohan";
        int idx = Arrays.asList(arr).indexOf(key);
        if(idx>=0) System.out.println("Found at " + idx);
        else System.out.println("Not found");
    }
}`
            },
            {
                title: "Core Java B — Applet smiley face (use Frame)",
                language: "java",
                filename: "Smiley.java",
                code: `import java.awt.*;
public class Smiley extends Frame {
    public Smiley(){
        setSize(200,200); setVisible(true);
    }
    public void paint(Graphics g){
        g.setColor(Color.YELLOW); g.fillOval(40,40,120,120);
        g.setColor(Color.BLACK); g.fillOval(75,85,10,10); g.fillOval(115,85,10,10);
        g.drawArc(75,100,50,30,0,-180);
    }
    public static void main(String[] args){ new Smiley(); }
}`
            },
            {
                title: "Python A — Student class modify attributes and print original/modified",
                language: "python",
                filename: "student_modify.py",
                code: `class Student:
    def __init__(self,name,marks): self.name, self.marks = name, marks
s = Student("A", 80)
print("Original:", s.name, s.marks)
s.name = "B"; s.marks = 90
print("Modified:", s.name, s.marks)`
            },
            {
                title: "Python B — Remove characters with odd index",
                language: "python",
                filename: "remove_odd_index.py",
                code: `def remove_odd(s): return "".join(ch for i,ch in enumerate(s) if i%2==0)
print(remove_odd("abcdefgh"))`
            }
        ]
    },
    {
        id: 16,
        programs: [
            {
                title: "Core Java A — Sum of digits using recursion",
                language: "java",
                filename: "SumDigitsRec.java",
                code: `public class SumDigitsRec {
    static int sum(int n){
        if(n==0) return 0;
        return n%10 + sum(n/10);
    }
    public static void main(String[] args){ System.out.println(sum(1234)); }
}`
            },
            {
                title: "Core Java B — Accept n employee names, sort ascending, use static",
                language: "java",
                filename: "SortEmployees.java",
                code: `import java.util.*;
public class SortEmployees {
    static void sortNames(String[] names){
        Arrays.sort(names);
        for(String n: names) System.out.println(n);
    }
    public static void main(String[] args){
        String[] names = {"Z","A","M"};
        sortNames(names);
    }
}`
            },
            {
                title: "Python A — Rectangle class with area and perimeter",
                language: "python",
                filename: "rectangle.py",
                code: `class Rectangle:
    def __init__(self,l,w): self.l, self.w = l, w
    def area(self): return self.l*self.w
    def perimeter(self): return 2*(self.l+self.w)
r = Rectangle(3,4); print(r.area(), r.perimeter())`
            },
            {
                title: "Python B — GUI add/print/delete items in listbox with three buttons",
                language: "python",
                filename: "listbox_app.py",
                code: `import tkinter as tk
root=tk.Tk()
lb=tk.Listbox(root); lb.pack()
ent=tk.Entry(root); ent.pack()
def add(): lb.insert(tk.END, ent.get())
def delete(): lb.delete(tk.ACTIVE)
def print_sel(): print(lb.get(0, tk.END))
tk.Button(root,text="Add",command=add).pack()
tk.Button(root,text="Delete",command=delete).pack()
tk.Button(root,text="Print",command=print_sel).pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 17,
        programs: [
            {
                title: "Core Java A — From command line store only Armstrong numbers into array",
                language: "java",
                filename: "ArmstrongFromArgs.java",
                code: `import java.util.*;
public class ArmstrongFromArgs {
    static boolean isArm(int n){
        int tmp=n, sum=0, digits=0;
        int t=n; while(t>0){ digits++; t/=10;}
        while(tmp>0){
            int d=tmp%10; sum+=Math.pow(d, digits); tmp/=10;
        }
        return sum==n;
    }
    public static void main(String[] args){
        ArrayList<Integer> arm = new ArrayList<>();
        for(String a: args){
            int n = Integer.parseInt(a);
            if(isArm(n)) arm.add(n);
        }
        System.out.println(arm);
    }
}`
            },
            {
                title: "Core Java B — Product class, display total amount",
                language: "java",
                filename: "ProductArray.java",
                code: `class Product {
    int pid, qty; double price; String pname;
    Product(int pid,String pname,double price,int qty){ this.pid=pid; this.pname=pname; this.price=price; this.qty=qty;}
    double total(){ return price*qty; }
}
public class ProductArray {
    public static void main(String[] args){
        Product[] p = { new Product(1,"A",100,2), new Product(2,"B",50,3) };
        double sum = 0;
        for(Product pr: p){ System.out.println(pr.pname + " total " + pr.total()); sum += pr.total(); }
        System.out.println("Grand Total: "+sum);
    }
}`
            },
            {
                title: "Python A — GUI input string -> uppercase on button",
                language: "python",
                filename: "upper_gui.py",
                code: `import tkinter as tk
def to_upper():
    out.config(text=ent.get().upper())
root=tk.Tk()
ent=tk.Entry(root); ent.pack()
tk.Button(root,text="Upper",command=to_upper).pack()
out=tk.Label(root,text=""); out.pack()
root.mainloop()`
            },
            {
                title: "Python B — Date class with InvalidDateException",
                language: "python",
                filename: "date_check.py",
                code: `class InvalidDateException(Exception): pass
class Date:
    def __init__(self,d,m,y):
        if not (1<=m<=12 and 1<=d<=31): raise InvalidDateException("Invalid Date")
        self.d, self.m, self.y = d,m,y
    def display(self): print(f"{self.d}-{self.m}-{self.y}")
# test
try:
    d=Date(31,2,2020)
    d.display()
except Exception as e:
    print(e)`
            }
        ]
    },
    {
        id: 18,
        programs: [
            {
                title: "Core Java A — Area of Circle, Triangle, Rectangle by method overloading",
                language: "java",
                filename: "AreasOverload.java",
                code: `public class AreasOverload {
    static double area(double r){ return Math.PI*r*r; }
    static double area(double b, double h, char t){ return 0.5*b*h; } // triangle if t='T'
    static double area(double l, double w){ return l*w; } // rectangle
    public static void main(String[] args){
        System.out.println(area(3.0)); System.out.println(area(3.0,4.0,'T')); System.out.println(area(3.0,4.0));
    }
}`
            },
            {
                title: "Core Java B — Copy file and change case, replace digits with symbol",
                language: "java",
                filename: "CopyTransform.java",
                code: `import java.io.*;
public class CopyTransform {
    public static void main(String[] args) throws IOException {
        try(BufferedReader br=new BufferedReader(new FileReader(args[0]));
            BufferedWriter bw=new BufferedWriter(new FileWriter(args[1]))) {
            int ch;
            while((ch=br.read())!=-1){
                char c = (char) ch;
                if(Character.isDigit(c)) bw.write('*');
                else if(Character.isUpperCase(c)) bw.write(Character.toLowerCase(c));
                else if(Character.isLowerCase(c)) bw.write(Character.toUpperCase(c));
                else bw.write(c);
            }
        }
    }
}`
            },
            {
                title: "Python A — Print elements < 5 from list a",
                language: "python",
                filename: "less_than_five.py",
                code: `a = [1,2,5,6,3]
print([x for x in a if x < 5])`
            },
            {
                title: "Python B — Person/Employee subclass",
                language: "python",
                filename: "person_employee.py",
                code: `class Person: 
    def __init__(self,name,address): self.name, self.address = name,address
class Employee(Person):
    def __init__(self,name,address,staffid,salary):
        super().__init__(name,address); self.staffid, self.salary = staffid, salary
    def display(self): print(self.name, self.address, self.staffid, self.salary)
# create objects:
emps = [Employee("A","Addr",1,5000), Employee("B","Addr2",2,6000)]
for e in emps: e.display()`
            }
        ]
    },
    {
        id: 19,
        programs: [
            {
                title: "Core Java A — Fibonacci series using function",
                language: "java",
                filename: "Fibonacci.java",
                code: `public class Fibonacci {
    static void printFib(int n){
        int a=0,b=1;
        for(int i=0;i<n;i++){ System.out.print(a+" "); int t=a+b; a=b; b=t; }
        System.out.println();
    }
    public static void main(String[] args){ printFib(10); }
}`
            },
            {
                title: "Core Java B — Applet display x,y position of cursor movement using listeners (Frame)",
                language: "java",
                filename: "MousePosition.java",
                code: `import java.awt.*; import java.awt.event.*;
public class MousePosition extends Frame implements MouseMotionListener, KeyListener {
    Label pos = new Label("x: -, y: -");
    public MousePosition(){ add(pos); addMouseMotionListener(this); addKeyListener(this); setSize(300,200); setVisible(true);
        addWindowListener(new WindowAdapter(){ public void windowClosing(WindowEvent e){ dispose(); }});
    }
    public void mouseMoved(MouseEvent e){ pos.setText("x:"+e.getX()+" y:"+e.getY()); }
    public void mouseDragged(MouseEvent e){}
    public void keyTyped(KeyEvent e){} public void keyPressed(KeyEvent e){} public void keyReleased(KeyEvent e){}
    public static void main(String[] args){ new MousePosition(); }
}`
            },
            {
                title: "Python A — GUI multiplication table display",
                language: "python",
                filename: "table_gui.py",
                code: `import tkinter as tk
def show():
    n=int(ent.get())
    res.delete(0,tk.END)
    for i in range(1,11): res.insert(tk.END, f"{n} x {i} = {n*i}")
root=tk.Tk()
ent=tk.Entry(root); ent.pack()
tk.Button(root,text="Show",command=show).pack()
res=tk.Listbox(root); res.pack()
root.mainloop()`
            },
            {
                title: "Python B — Shape, Square, Circle area and volume (volume for 3D shapes; adaptably return 0 for 2D)",
                language: "python",
                filename: "shapes.py",
                code: `import math
class Shape: pass
class Square(Shape):
    def __init__(self,side): self.side=side
    def area(self): return self.side*self.side
class Circle(Shape):
    def __init__(self,r): self.r=r
    def area(self): return math.pi*self.r*self.r
# example
print(Square(3).area(), Circle(2).area())`
            }
        ]
    },
    {
        id: 20,
        programs: [
            {
                title: "Core Java A — AWT Frame titled \"TYBBACA\", background RED; close on window close",
                language: "java",
                filename: "TYBBACAFrame.java",
                code: `import java.awt.*; import java.awt.event.*;
public class TYBBACAFrame extends Frame {
    public TYBBACAFrame(){
        super("TYBBACA"); setBackground(Color.RED); setSize(300,200); setVisible(true);
        addWindowListener(new WindowAdapter(){ public void windowClosing(WindowEvent e){ dispose(); }});
    }
    public static void main(String[] args){ new TYBBACAFrame(); }
}`
            },
            {
                title: "Core Java B — LinkedList with iterator and reverse with ListIterator",
                language: "java",
                filename: "LinkedListDemo.java",
                code: `import java.util.*;
public class LinkedListDemo {
    public static void main(String[] args){
        LinkedList<String> list = new LinkedList<>(Arrays.asList("CPP","Java","Python","PHP"));
        Iterator<String> it = list.iterator();
        while(it.hasNext()) System.out.println(it.next());
        ListIterator<String> li = list.listIterator(list.size());
        while(li.hasPrevious()) System.out.println(li.previous());
    }
}`
            },
            {
                title: "Python A — Circle area and circumference",
                language: "python",
                filename: "circle.py",
                code: `import math
class Circle:
    def __init__(self,r): self.r=r
    def area(self): return math.pi*self.r*self.r
    def circumference(self): return 2*math.pi*self.r
print(Circle(3).area(), Circle(3).circumference())`
            },
            {
                title: "Python B — Dictionary mapping i to i*i",
                language: "python",
                filename: "squares_dict.py",
                code: `n=5
d = {i: i*i for i in range(1,n+1)}
print(d)`
            }
        ]
    },
    {
        id: 21,
        programs: [
            {
                title: "Core Java A — Display each word from file in reverse order",
                language: "java",
                filename: "FileWordsReverse.java",
                code: `import java.io.*;
public class FileWordsReverse {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader(args[0]));
        String line; while((line = br.readLine())!=null){
            String[] words = line.split("\\s+");
            for(int i=words.length-1;i>=0;i--) System.out.print(words[i]+" ");
        }
        br.close();
    }
}`
            },
            {
                title: "Core Java B — Hashtable of city and STD code; search",
                language: "java",
                filename: "CityStd.java",
                code: `import java.util.*;
public class CityStd {
    public static void main(String[] args){
        Hashtable<String,String> ht = new Hashtable<>();
        ht.put("Pune","020"); ht.put("Mumbai","022");
        System.out.println("STD of Pune: " + ht.get("Pune"));
    }
}`
            },
            {
                title: "Python A — Rectangle class area/perimeter (duplicate of Slip 16)",
                language: "python",
                filename: "rectangle.py",
                code: `class Rectangle:
    def __init__(self,l,w): self.l, self.w = l, w
    def area(self): return self.l*self.w
    def perimeter(self): return 2*(self.l+self.w)
r = Rectangle(3,4); print(r.area(), r.perimeter())`
            },
            {
                title: "Python B — Convert tuple of strings to tuple of ints",
                language: "python",
                filename: "tuple_convert.py",
                code: `t = ("1","2","3")
print(tuple(int(x) for x in t))`
            }
        ]
    },
    {
        id: 22,
        programs: [
            {
                title: "Core Java A — Factorial using recursion",
                language: "java",
                filename: "FactorialRec.java",
                code: `public class FactorialRec {
    static long fact(int n){ if(n<=1) return 1; return n*fact(n-1); }
    public static void main(String[] args){ System.out.println(fact(5)); }
}`
            },
            {
                title: "Core Java B — Create, rename, delete file and display path",
                language: "java",
                filename: "FileOps.java",
                code: `import java.io.*;
public class FileOps {
    public static void main(String[] args) throws IOException {
        File f = new File("temp.txt");
        f.createNewFile();
        System.out.println("Path: "+f.getAbsolutePath());
        f.renameTo(new File("temp2.txt"));
        new File("temp2.txt").delete();
    }
}`
            },
            {
                title: "Python A — Operator overloading for repetition n times",
                language: "python",
                filename: "repeat_class.py",
                code: `class Repeater:
    def __init__(self, s): self.s=s
    def __mul__(self,n): return self.s * n
print(Repeater("abc") * 3)`
            },
            {
                title: "Python B — Bubble sort using list",
                language: "python",
                filename: "bubble_sort.py",
                code: `def bubble(a):
    n=len(a)
    for i in range(n):
        for j in range(0,n-i-1):
            if a[j]>a[j+1]: a[j],a[j+1]=a[j+1],a[j]
    return a
print(bubble([5,2,3,1]))`
            }
        ]
    },
    {
        id: 23,
        programs: [
            {
                title: "Core Java A — GUI label font style change (repeat of earlier)",
                language: "java",
                filename: "font_style.java",
                code: `import java.awt.*; import java.awt.event.*;
public class FontStyle extends Frame {
    Label l; Checkbox bold; Choice size;
    FontStyle() {
        l = new Label("Hello World");
        l.setFont(new Font("Arial", Font.PLAIN, 12));
        add(l);
        
        bold = new Checkbox("Bold");
        bold.addItemListener(e -> updateFont());
        add(bold);
        
        size = new Choice();
        for(int i=8; i<=48; i+=4) size.add(""+i);
        size.addItemListener(e -> updateFont());
        add(size);
        
        setLayout(new FlowLayout());
        setSize(400, 200);
        setVisible(true);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) { dispose(); }
        });
    }
    
    void updateFont() {
        int style = bold.getState() ? Font.BOLD : Font.PLAIN;
        int fontSize = Integer.parseInt(size.getSelectedItem());
        l.setFont(new Font("Arial", style, fontSize));
    }
    
    public static void main(String[] args) { new FontStyle(); }
}`
            },
            {
                title: "Core Java B — Create circles class, operator overloading add radii (Java: method)",
                language: "java",
                filename: "Circles.java",
                code: `class Circle {
    double r;
    Circle(double r){ this.r=r; }
    Circle add(Circle c){ return new Circle(this.r + c.r); }
    double area(){ return Math.PI*r*r; }
}
public class Circles {
    public static void main(String[] args){
        Circle a = new Circle(2), b = new Circle(3);
        Circle c = a.add(b);
        System.out.println(c.area());
    }
}`
            },
            {
                title: "Python A — (Label font style) — see previous.",
                language: "python",
                filename: "font_style.py",
                code: `import tkinter as tk
from tkinter import font

def update():
    style = ("Helvetica", size_var.get(), "bold" if bold_var.get() else "normal")
    lbl.config(font=style)

root = tk.Tk()
size_var = tk.IntVar(value=12)
bold_var = tk.IntVar()
tk.Label(root,text="Sample").pack()
lbl = tk.Label(root,text="Hello")
lbl.pack()
tk.Checkbutton(root,text="Bold",variable=bold_var,command=update).pack()
tk.Spinbox(root, from_=8, to=48, textvariable=size_var, command=update).pack()
root.mainloop()`
            },
            {
                title: "Python B — Operator overloading to add radii and display area",
                language: "python",
                filename: "circle_overload.py",
                code: `import math
class Circle:
    def __init__(self,r): self.r=r
    def __add__(self,other): return Circle(self.r + other.r)
    def area(self): return math.pi*self.r*self.r
c1=Circle(2); c2=Circle(3); c3 = c1 + c2
print(c3.area())`
            }
        ]
    },
    {
        id: 24,
        programs: [
            {
                title: "Core Java A — Count digits, spaces, characters from file",
                language: "java",
                filename: "CountFile.java",
                code: `import java.io.*;
public class CountFile {
    public static void main(String[] args) throws Exception {
        int digits=0, spaces=0, chars=0;
        BufferedReader br = new BufferedReader(new FileReader(args[0]));
        int ch;
        while((ch=br.read())!=-1){
            if(Character.isDigit(ch)) digits++;
            else if(Character.isSpaceChar(ch)) spaces++;
            if(!Character.isISOControl(ch)) chars++;
        }
        System.out.println("Digits:"+digits+" Spaces:"+spaces+" Chars:"+chars);
    }
}`
            },
            {
                title: "Core Java B — Package TYBBACA with Student and Teacher (basic)",
                language: "java",
                filename: "TYBBACA/Student.java",
                code: `package TYBBACA;
public class Student { int rno; String sname; double per; public Student(int r,String n,double p){rno=r;sname=n;per=p;} public void disp(){ System.out.println(rno+sname+per);} }`
            },
            {
                title: "Python A — Prime check + factorial",
                language: "python",
                filename: "prime_factorial.py",
                code: `def is_prime(n):
    if n<=1: return False
    import math
    for i in range(2,int(math.sqrt(n))+1):
        if n%i==0: return False
    return True

def factorial(n):
    import math
    return math.factorial(n)

n=int(input())
print("Prime" if is_prime(n) else "Not prime")
print("Fact:", factorial(n))`
            },
            {
                title: "Python B — GUI: number n and display each digit in words",
                language: "python",
                filename: "digits_words.py",
                code: `import tkinter as tk
words = {"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine"}
def show():
    s = ent.get()
    res.config(text=" ".join(words[ch] for ch in s if ch.isdigit()))
root=tk.Tk()
ent=tk.Entry(root); ent.pack()
tk.Button(root,text="Show",command=show).pack()
res=tk.Label(root,text=""); res.pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 25,
        programs: [
            {
                title: "Core Java A — Check palindrome string",
                language: "java",
                filename: "Palindrome.java",
                code: `public class Palindrome {
    public static void main(String[] args){
        String s = "madam";
        String r = new StringBuilder(s).reverse().toString();
        System.out.println(s.equals(r) ? "Palindrome" : "Not palindrome");
    }
}`
            },
            {
                title: "Core Java B — Package Series printing Fibonacci, cubes, squares",
                language: "java",
                filename: "Series.java",
                code: `public class Series {
    static void fib(int n){ int a=0,b=1; for(int i=0;i<n;i++){ System.out.print(a+" "); int t=a+b; a=b; b=t;} System.out.println(); }
    static void cubes(int n){ for(int i=1;i<=n;i++) System.out.print((i*i*i)+" "); System.out.println(); }
    static void squares(int n){ for(int i=1;i<=n;i++) System.out.print((i*i)+" "); System.out.println(); }
    public static void main(String[] args){ fib(5); cubes(5); squares(5); }
}`
            },
            {
                title: "Python A — Function count upper/lower (duplicate of Slip 2)",
                language: "python",
                filename: "count_case.py",
                code: `def count_case(s):
    lower = sum(1 for c in s if c.islower())
    upper = sum(1 for c in s if c.isupper())
    return upper, lower

if __name__ == "__main__":
    s = input("Enter string: ")
    up, low = count_case(s)
    print(f"Upper: {up}, Lower: {low}")`
            },
            {
                title: "Python B — Basic calculator class",
                language: "python",
                filename: "calculator_class.py",
                code: `class Calculator:
    def add(self,a,b): return a+b
    def sub(self,a,b): return a-b
    def mul(self,a,b): return a*b
    def div(self,a,b): return a/b
c=Calculator(); print(c.add(2,3))`
            }
        ]
    },
    {
        id: 26,
        programs: [
            {
                title: "Core Java A — ASCII values from a file",
                language: "java",
                filename: "ASCIIFromFile.java",
                code: `import java.io.*;
public class ASCIIFromFile {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new FileReader(args[0]));
        int ch;
        while((ch=br.read())!=-1){
            System.out.println((char)ch + " : " + ch);
        }
    }
}`
            },
            {
                title: "Core Java B — Applet to draw a Temple (use paint)",
                language: "java",
                filename: "Temple.java",
                code: `import java.awt.*;
public class Temple extends Frame {
    public Temple(){ setSize(400,300); setVisible(true); }
    public void paint(Graphics g){
        g.drawRect(100,150,200,100); // base
        g.drawRect(150,100,100,50); // top
        g.drawLine(100,150,200,50); g.drawLine(300,150,200,50);
    }
    public static void main(String[] args){ new Temple(); }
}`
            },
            {
                title: "Python A — Anonymous functions area square/rectangle",
                language: "python",
                filename: "anon_area.py",
                code: `area_square = lambda s: s*s
area_rect = lambda l,w: l*w
print(area_square(4), area_rect(3,5))`
            },
            {
                title: "Python B — GUI accept sentence and transform on button",
                language: "python",
                filename: "transform_sentence.py",
                code: `import tkinter as tk
def transform():
    s = ent.get()
    s = s.replace(" ", "_")
    s = s.swapcase()
    s = ''.join('?' if ch.isdigit() else ch for ch in s)
    out.config(text=s)
root=tk.Tk()
ent=tk.Entry(root,width=50); ent.pack()
tk.Button(root,text="Transform",command=transform).pack()
out=tk.Label(root,text=""); out.pack()
root.mainloop()`
            }
        ]
    },
    {
        id: 27,
        programs: [
            {
                title: "Core Java A — Count integers from command line args",
                language: "java",
                filename: "CountIntegers.java",
                code: `public class CountIntegers {
    public static void main(String[] args){
        int count=0;
        for(String a: args) {
            try{ Integer.parseInt(a); count++; } catch(Exception e){}
        }
        System.out.println("Integers: "+count);
    }
}`
            },
            {
                title: "Core Java B — Accept 5 employees and show in JTable",
                language: "java",
                filename: "EmployeeTable.java",
                code: `import javax.swing.*;
public class EmployeeTable {
    public static void main(String[] args){
        String[] cols = {"Eno","Ename","Salary"};
        String[][] data = { {"1","A","1000"},{"2","B","2000"},{"3","C","1500"},{"4","D","1200"},{"5","E","1300"} };
        JTable table = new JTable(data, cols);
        JOptionPane.showMessageDialog(null, new JScrollPane(table));
    }
}`
            },
            {
                title: "Python A — Listbox of CS courses",
                language: "python",
                filename: "cs_courses_listbox.py",
                code: `import tkinter as tk
root=tk.Tk()
lb = tk.Listbox(root)
for c in ["DS", "Algo", "OS", "DBMS"]: lb.insert(tk.END, c)
lb.pack()
root.mainloop()`
            },
            {
                title: "Python B — Merge two lists into list of tuples",
                language: "python",
                filename: "merge_lists.py",
                code: `a=[1,2]; b=['a','b']
print(list(zip(a,b)))`
            }
        ]
    },
    {
        id: 28,
        programs: [
            {
                title: "Core Java A — Count number of integers using command line args (duplicate of 27)",
                language: "java",
                filename: "CountIntegers.java",
                code: `public class CountIntegers {
    public static void main(String[] args){
        int count=0;
        for(String a: args) {
            try{ Integer.parseInt(a); count++; } catch(Exception e){}
        }
        System.out.println("Integers: "+count);
    }
}`
            },
            {
                title: "Core Java B — Accept details of 5 employees and display on JTable (duplicate of 27)",
                language: "java",
                filename: "EmployeeTable.java",
                code: `import javax.swing.*;
public class EmployeeTable {
    public static void main(String[] args){
        String[] cols = {"Eno","Ename","Salary"};
        String[][] data = { {"1","A","1000"},{"2","B","2000"},{"3","C","1500"},{"4","D","1200"},{"5","E","1300"} };
        JTable table = new JTable(data, cols);
        JOptionPane.showMessageDialog(null, new JScrollPane(table));
    }
}`
            },
            {
                title: "Python A — Listbox of CS courses (duplicate of 27)",
                language: "python",
                filename: "cs_courses_listbox.py",
                code: `import tkinter as tk
root=tk.Tk()
lb = tk.Listbox(root)
for c in ["DS", "Algo", "OS", "DBMS"]: lb.insert(tk.END, c)
lb.pack()
root.mainloop()`
            },
            {
                title: "Python B — Accept two lists and merge into list of tuples (duplicate of 27)",
                language: "python",
                filename: "merge_lists.py",
                code: `a=[1,2]; b=['a','b']
print(list(zip(a,b)))`
            }
        ]
    },
    {
        id: 29,
        programs: [
            {
                title: "Core Java A — Check voting eligibility and exceptions",
                language: "java",
                filename: "VotingEligibility.java",
                code: `class UnderAgeException extends Exception { UnderAgeException(String m){ super(m); } }
public class VotingEligibility {
    public static void main(String[] args) throws Exception {
        int age = Integer.parseInt(args.length>0?args[0]:"17");
        if(age < 18) throw new UnderAgeException("Not eligible");
        System.out.println("Eligible");
    }
}`
            },
            {
                title: "Core Java B — Applet bouncing ball, change color each bounce (Frame with Timer)",
                language: "java",
                filename: "BouncingBall.java",
                code: `import java.awt.*; import javax.swing.*;
import java.util.Random;
public class BouncingBall extends JPanel implements Runnable {
    int x=0,y=50,dx=2; Color c=Color.RED; Random r=new Random();
    public void paintComponent(Graphics g){ super.paintComponent(g); g.setColor(c); g.fillOval(x,y,30,30);}
    public void run(){
        while(true){
            x += dx;
            if(x < 0 || x > getWidth()-30){ dx = -dx; c = new Color(r.nextInt(256),r.nextInt(256),r.nextInt(256)); }
            repaint();
            try{ Thread.sleep(10);}catch(Exception e){}
        }
    }
    public static void main(String[] args){
        JFrame f = new JFrame(); BouncingBall b = new BouncingBall(); f.add(b); f.setSize(400,200); f.setVisible(true);
        new Thread(b).start();
    }
}`
            },
            {
                title: "Python A — GUI calculate volume of sphere from radius",
                language: "python",
                filename: "sphere_volume_gui.py",
                code: `import tkinter as tk, math
def calc():
    r=float(ent.get()); out.config(text=str((4/3)*math.pi*r**3))
root=tk.Tk()
ent=tk.Entry(root); ent.pack()
tk.Button(root,text="Volume",command=calc).pack()
out=tk.Label(root,text=""); out.pack()
root.mainloop()`
            },
            {
                title: "Python B — Sort dictionary by key/value asc/desc",
                language: "python",
                filename: "sort_dict.py",
                code: `d = {'a':3,'b':1,'c':2}
print(dict(sorted(d.items(), key=lambda x:x[0])))  # by key asc
print(dict(sorted(d.items(), key=lambda x:x[0], reverse=True)))  # by key desc
print(dict(sorted(d.items(), key=lambda x:x[1])))  # by value asc
print(dict(sorted(d.items(), key=lambda x:x[1], reverse=True)))  # by value desc`
            }
        ]
    },
    {
        id: 30,
        programs: [
            {
                title: "Core Java A — Accept number; if zero throw \"Number is Zero\"; if non-numeric error \"Number is Invalid\"; else check palindrome",
                language: "java",
                filename: "NumberCheck.java",
                code: `class NumberIsZero extends Exception { NumberIsZero(String m){ super(m); } }
public class NumberCheck {
    public static void main(String[] args){
        try{
            String s = args.length>0?args[0]:"121";
            int n = Integer.parseInt(s);
            if(n==0) throw new NumberIsZero("Number is Zero");
            String rev = new StringBuilder(s).reverse().toString();
            System.out.println(s.equals(rev) ? "Palindrome" : "Not Palindrome");
        } catch(NumberIsZero e){ System.out.println(e.getMessage()); }
        catch(NumberFormatException e){ System.out.println("Number is Invalid"); }
    }
}`
            },
            {
                title: "Core Java B — Design specified GUI using Swing",
                language: "java",
                filename: "DesignGUI.java",
                code: `import javax.swing.*;
public class DesignGUI {
    public static void main(String[] args){
        JFrame f = new JFrame("Design");
        f.setSize(400,300);
        f.setLayout(null);
        // add components as per slip design using setBounds(...)
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}`
            },
            {
                title: "Python A — GUI: accept string and char, count occurrences",
                language: "python",
                filename: "count_char_gui.py",
                code: `import tkinter as tk
def count():
    s = ent1.get(); ch = ent2.get()
    lbl.config(text=str(s.count(ch)))
root=tk.Tk()
ent1=tk.Entry(root); ent1.pack()
ent2=tk.Entry(root); ent2.pack()
tk.Button(root,text="Count",command=count).pack()
lbl=tk.Label(root,text=""); lbl.pack()
root.mainloop()`
            },
            {
                title: "Python B — Class methods printing and Country/State example",
                language: "python",
                filename: "country_state.py",
                code: `class Country:
    def printNationality(self): print("Indian")
class State(Country):
    def printState(self): print("Maharashtra")
class City(State):
    def printCity(self): print("Pune")

c = City()
c.printCity(); c.printState(); c.printNationality()`
            }
        ]
    }
];

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Function to create a program element
function createProgramElement(program) {
    const programDiv = document.createElement('div');
    programDiv.className = 'program-container bg-white rounded-lg shadow-md mb-4';
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'flex justify-between items-center bg-gray-50 px-4 py-2 rounded-t-lg';
    
    const title = document.createElement('h3');
    title.className = 'font-semibold text-gray-800';
    title.textContent = program.title;
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.onclick = () => {
        copyToClipboard(program.code);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    };
    
    headerDiv.appendChild(title);
    headerDiv.appendChild(copyBtn);
    
    const codeDiv = document.createElement('div');
    codeDiv.className = 'code-block';
    codeDiv.textContent = program.code;
    
    const filenameDiv = document.createElement('div');
    filenameDiv.className = 'px-4 py-2 bg-gray-50 text-sm text-gray-600 rounded-b-lg';
    filenameDiv.textContent = `File: ${program.filename}`;
    
    programDiv.appendChild(headerDiv);
    programDiv.appendChild(codeDiv);
    programDiv.appendChild(filenameDiv);
    
    return programDiv;
}

// Function to create a slip element
function createSlipElement(slip) {
    const slipDiv = document.createElement('div');
    slipDiv.className = 'slip-container bg-white rounded-xl shadow-lg p-6 mb-8';
    
    const slipHeader = document.createElement('h2');
    slipHeader.className = 'text-2xl font-bold text-center mb-6 text-gray-800';
    slipHeader.textContent = `Slip ${slip.id}`;
    
    slipDiv.appendChild(slipHeader);
    
    slip.programs.forEach(program => {
        slipDiv.appendChild(createProgramElement(program));
    });
    
    return slipDiv;
}

// Function to render all slips
function renderSlips() {
    const container = document.getElementById('slips-container');
    container.innerHTML = '';
    
    slips.forEach(slip => {
        container.appendChild(createSlipElement(slip));
    });
}

// Function to copy all programs
function copyAllPrograms() {
    let allCode = '';
    slips.forEach(slip => {
        allCode += `\n//=====================================================\n`;
        allCode += `// SLIP ${slip.id}\n`;
        allCode += `//=====================================================\n\n`;
        
        slip.programs.forEach((program, index) => {
            allCode += `//-----------------------------------------------------\n`;
            allCode += `// QUESTION ${index + 1}: ${program.title}\n`;
            allCode += `// FILE: ${program.filename}\n`;
            allCode += `//-----------------------------------------------------\n\n`;
            allCode += program.code + '\n\n';
        });
        
        allCode += `//=====================================================\n`;
        allCode += `// END OF SLIP ${slip.id}\n`;
        allCode += `//=====================================================\n\n`;
    });
    
    copyToClipboard(allCode);
    
    const copyBtn = document.getElementById('copy-all-btn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied All!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

// Function to render slip selection box
function renderSlipSelectionBox() {
    const container = document.getElementById('slips-list');
    container.innerHTML = '';
    
    slips.forEach(slip => {
        const slipItem = document.createElement('div');
        slipItem.className = 'slip-item';
        slipItem.textContent = `Slip ${slip.id}`;
        slipItem.onclick = () => {
            // Scroll to the slip
            const slipElement = document.getElementById(`slip-${slip.id}`);
            if (slipElement) {
                slipElement.scrollIntoView({ behavior: 'smooth' });
            }
        };
        container.appendChild(slipItem);
    });
}

// Function to create a slip element
function createSlipElement(slip) {
    const slipDiv = document.createElement('div');
    slipDiv.className = 'slip-container bg-white rounded-xl shadow-lg p-6 mb-8';
    slipDiv.id = `slip-${slip.id}`;
    
    const slipHeader = document.createElement('h2');
    slipHeader.className = 'text-2xl font-bold text-center mb-6 text-gray-800';
    slipHeader.textContent = `Slip ${slip.id}`;
    
    slipDiv.appendChild(slipHeader);
    
    slip.programs.forEach(program => {
        slipDiv.appendChild(createProgramElement(program));
    });
    
    return slipDiv;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderSlipSelectionBox();
    renderSlips();
    
    const copyAllBtn = document.getElementById('copy-all-btn');
    copyAllBtn.addEventListener('click', copyAllPrograms);
});