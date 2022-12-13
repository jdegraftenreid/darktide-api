from bs4 import BeautifulSoup 
import requests
import csv
import re



urls = {'ogryn':'https://warhammer-40k-darktide.fandom.com/wiki/Ogryn:_Skullbreaker',
'zealot':'https://warhammer-40k-darktide.fandom.com/wiki/Zealot:_Preacher',
'psyker':'https://warhammer-40k-darktide.fandom.com/wiki/Psyker:_Psykinetic',
'veteran':'https://warhammer-40k-darktide.fandom.com/wiki/Veteran:_Sharpshooter'}

def scrape(response):
    soup=BeautifulSoup(response.text, "html.parser")
    stats=soup.find_all('table', attrs={'class':'fandom-table'})
    #print(stats)  #debug tool
    if len(stats)>=1:
        return(stats[0]) # tables above 0 right now are for feats
    else:
        pass


def urlScraper(url):
    response=requests.get(url)
    table=scrape(response) 
    return stringSpliter(table)

def stringSpliter(table):
    count=0
    table=str(table)
    table=re.split('<tr>',table)
    for rows in table:
        table[count]=re.sub('<[^>]+>', '', rows)
        count+=1
    return(table)
    
def main():
    heroes=[]
    for url in urls.values():
        heroes.append(urlScraper(url))
    data=cvsData(heroes)
    writeCsv(data)

def cvsData(heroes):
    data=[]
    descriptions={}
    for hero in heroes:
        del hero[0]
        for info in hero:
            pairs = str(info).split('\n\n')
            pairs = list(filter(None,pairs))
            key=pairs[0].strip()
            value=pairs[1].strip()
            if key in descriptions.keys():
                descriptions[key].append(value)
            else:
                descriptions[key] = []
                descriptions[key].append(value)
    print(descriptions)

def writeCsv(heroes):
    heroes= arayFilter(heroes)
    with open('Hero_Scrape.csv','w+') as my_csv:
        csvWriter = csv.writer(my_csv,delimiter=',')
        csvWriter.writerows(heroes)
    my_csv.close()
        

def arayFilter(heroes):
    whiteNoise=['','\n',' ']
    count=0
    for hero in heroes:
        #print(hero) #debug tool
        hero=list(filter(lambda sub: sub not in whiteNoise , hero))
        hero=list(map(lambda each:each.strip('\n'),hero))
        heroes[count]=hero
        count+=1
    return heroes



if __name__== '__main__':
    main()