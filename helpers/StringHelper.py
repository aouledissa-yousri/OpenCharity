import string, random


class StringHelper:

    @staticmethod
    def generateRandomString():
        return "".join(random.choice(string.ascii_letters + string.digits + string.punctuation) for i in range(random.randint(1, 1000)))
