class Website:
    def __init__(self, name: str):
      self.domain = 'scorprog.net'
      self.loadbalancer = 'nginx'
      self.name = name
  
    def firstpage (self) -> str:
      print(f"Scorporg Inc by {self.name}")

    def call_self(self) -> str:
       print(f"Hello my name is {self.name}")


class SecondWebsite(Website):
    def __init__(self, name:str):
        super().__init__(name)
        self.accessor = "mwendwa"
        self.accessTime = 25  

    def __str__(self) -> str:
       return "Random text that describes the class or what it returns"

    def access(self) -> str:
        outputString = f"{self.domain} has been accessed"
        return outputString

    def firstpage(self) -> str:
        super().firstpage()
        print("First page has been modified")


access_site = SecondWebsite("David")
access_site.firstpage()
access_site.call_self()
print(access_site.access())
print(access_site)