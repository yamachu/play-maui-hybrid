namespace play_maui_hybrid.Components.Pages;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

public partial class MyCounter : BaseComponent<MyCounter>
{
    private int currentCount = 0;

    [Parameter] public string Title { get; set; } = "Blazor Component Counter";
    [Parameter] public EventCallback<int> MyEventCallback { get; set; }

    private async Task IncrementCount()
    {
        currentCount++;
        await MyEventCallback.InvokeAsync(currentCount);
    }

    [JSInvokable("FooBarManaged")]
    public Task<int> FooBar()
    {
        System.Console.WriteLine("FooBar: From BlazorComponent");
        return Task.FromResult(1);
    }
}
