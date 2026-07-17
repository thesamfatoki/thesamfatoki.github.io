#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main(){

    // get budget size (money i have)

    double budget_size;

    cout << "enter your income: R";
    cin >> budget_size;

    /////////////////////////////////////////////////////////

    // get purchase list size

    int list_size;

    cout << "enter number of expenses: ";
    cin >> list_size;

    /////////////////////////////////////////////////////////

    // get list items
    
    string purchase_list[list_size];

    cout << "\nenter list of expenses" << endl;
    
    for(int i = 0; i < list_size; ++i){

        cout << "item " << i+1 << ": ";
        cin >> purchase_list[i];
    }

    /////////////////////////////////////////////////////////

    // get prices for items

    double item_prices[list_size];
    double item_prices_total = 0;

    cout << "\nenter expense amounts" << endl;

    for(int i = 0; i < list_size; ++i){

        cout << "item " << i+1 << ": R";
        cin >> item_prices[i];

        item_prices_total += item_prices[i];
    }

    // cout << "\nthe total of things you bought is: R" << item_prices_total << endl;

    /////////////////////////////////////////////////////////

    // get leftover money

    double left_over;

    left_over = budget_size - item_prices_total;

    // cout << "\nthe money you have left is: R" << left_over << endl;

    /////////////////////////////////////////////////////////

    // shopping list

    cout << "\nexpense" << "\t\t" << " amount" << endl;
    cout << "--------------------------" << endl;

    for(int i = 0; i<list_size; ++i){

        cout << setw(10) << purchase_list[i] << " \t" << " R"<< item_prices[i] << endl;

    }

    cout << "__________________________" << endl;
    cout << "total\t\t R" << item_prices_total << endl;
    cout << "balance\t\t R" << left_over << endl;
    cout << "\n";


    return 0;
}