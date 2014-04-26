"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": ([[0, 2, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 'up'),
            "answer": [[0, 2, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]]
        },
        {
            "input": ([[0, 2, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]], 'down'),
            "answer": [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 2, 2, 2]]
        },
        {
            "input": ([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 2, 2, 2]], 'left'),
            "answer":[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [4, 4, 0, 2]]
        },
        {
            "input": ([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [4, 4, 0, 2]], 'right')
            "answer": [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 2, 8, 2]]
        }
    ]
}
