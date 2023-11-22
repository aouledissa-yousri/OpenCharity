


class DictionaryHelper:

    @staticmethod
    def getLastDictionaryElement(dictionary: dict):
        return next(reversed(dictionary.items()))

    @staticmethod
    def getLastDictionaryElementValue(dictionary: dict): 
        try: 
            return next(reversed(dictionary.items()))[1]
        except StopIteration:
            return {}
    
    @staticmethod
    def checkIfElementExists(dictionary: dict, key: str):
        return dictionary.get(key) is not None
    
    @staticmethod
    def compareDictionaries(dictionary1: dict, dictionary2: dict):
        return dictionary1 == dictionary2
