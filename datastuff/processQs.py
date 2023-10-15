example = """
MCQs:
1. What is the main cause of a supernova?
A. Collision with another star
B. Accretion of material from a companion star
C. Nuclear reactions in the core
D. Consuming all of its fuel

2. Which type of supernova is used as a standard candle for measuring astronomical distances?
A. Type I
B. Type II
C. Both
D. Neither

3. How much brighter can Type II supernovas be compared to Type I supernovas?
A. 10 times
B. 50 times
C. 100 times
D. 500 times

4. Which of the following is NOT a possible outcome of a supernova?
A. Formation of a black hole
B. Creation of heavier elements
C. Fusion of lighter elements
D. Formation of a white dwarf

5. What is the approximate mass requirement for a star to become a Type II supernova?
A. 5 times the mass of the Sun
B. 8 times the mass of the Sun
C. 10 times the mass of the Sun
D. 20 times the mass of the Sun

6. Why are Type I supernovas considered to be relatively uniform in brightness?
A. Because they occur in binary star systems
B. Because they all have the same mass
C. Because they all have the same size
D. Because they all have the same composition

7. Supernovas are important for the creation of:
A. New stars
B. New planets
C. New elements
D. New galaxies

8. What is the main difference between Type I and Type II supernovas?
A. Type I supernovas occur in binary star systems, while Type II supernovas occur in single stars.
B. Type I supernovas create heavier elements, while Type II supernovas do not.
C. Type I supernovas are much more common than Type II supernovas.
D. Type I supernovas are less powerful than Type II supernovas.

True/False:
9. Supernovas can have a significant impact on surrounding celestial bodies.
A. True
B. False

10. Type I supernovas occur in single stars, while Type II supernovas occur in binary star systems.
A. True
B. False

11. The energy released in a supernova can be dispersed in the form of light, radiation and shock waves.
A. True
B. False

12. Supernovas can only occur in very young stars.
A. True
B. False

Free-response:
13. Explain the role of supernovas in the creation of elements in the universe.

14. Describe the two types of supernovas and the main differences between them.

15. How do scientists use supernovas as standard candles for measuring astronomical distances?

Answer key:
1. B
2. A
3. C
4. D
5. B
6. A
7. C
8. A
9. A
10. B
11. A
12. B
13. Supernovas play a crucial role in the creation of elements in the universe. The intense energy and pressure released during these explosions can fuse lighter elements together, creating heavier elements like iron, gold, and uranium. Without supernovas, these elements would not exist in the vast quantities that we see today.
14. Type I supernovas occur in binary star systems, where one star has already reached the end of its life and has become a white dwarf. The white dwarf then accretes material from its companion star, causing it to reach a critical mass and explode as a supernova. Type II supernovas occur in single stars that are at least eight times more massive than the Sun. As these stars reach the end of their life, they undergo a series of nuclear reactions, creating heavier elements in their core until the core can no longer sustain itself. The core then collapses, leading to a violent explosion known as a supernova.
15. Type I supernovas are considered to be relatively uniform in brightness, making them useful as standard candles for measuring astronomical distances. By knowing the intrinsic brightness of a Type I supernova, scientists can use its apparent brightness to calculate its distance from Earth. This helps in measuring distances to other galaxies and in understanding the expansion of the universe.
"""

lines = example.split('\n')
questions = []
current_question = None
q_type = None
current_options = []
q_count = 0

for line in lines:
    line = line.strip()
    if line:
        if "answer key" in line.lower():
            break
        if line.startswith("MCQs:"):
            q_type = "MCQ"
            continue
        elif line.startswith("True/False:"):
            q_type = "TF"
            continue
        elif line.startswith("Free-response:"):
            q_type = "FR"
            continue

        if q_type == "MCQ":
            print(q_type, line[0], line[3:])
            questions.append({
                'num': int()

            })

        elif q_type == "TF":
            pass

        elif q_type == "FR":
            pass

print(questions)