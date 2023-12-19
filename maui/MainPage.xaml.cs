using Microsoft.AspNetCore.Components.Web;
using play_maui_hybrid.Components.Pages;

namespace play_maui_hybrid;

public partial class MainPage : ContentPage
{
	public MainPage()
	{
		InitializeComponent();

		// Register the Blazor WebView component
		blazorWebView.RootComponents.RegisterForJavaScript<Counter>("BlazorCounter-react");
		blazorWebView.RootComponents.RegisterForJavaScript<MyCounter>("BlazorMyCounter-react");
	}
}
