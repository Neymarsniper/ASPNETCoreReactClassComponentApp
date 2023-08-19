//using ASPNetCoreReactClassComponent.Controllers;
using ASPNetCoreReactClassComponent.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASPNetCoreReactClassComponent.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id =1, title = "Asian stocks slip as China data continues to disappoint - Reuters", description="Asian stocks stumbled on Wednesday, as more disappointing Chinese economic data and the absence of meaningful stimulus from Beijing continued to weigh on investor sentiment.", urlToImage="https://www.reuters.com/resizer/ip8qer8P1SG6nQSdSAe_7e_D1iE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JAQ6SVUAKRKMXCEYFJ5WFEQQXQ.jpg", url="https://www.reuters.com/markets/global-markets-wrapup-1-2023-08-16/"},
            new ItemModel{Id =2, title = "Maui's displaced grow anxious as wildfire recovery drags on - Reuters", description="A week after wildfire ravaged the resort town of Lahaina, traumatized Maui residents have grown weary from living off relief supplies while many are kept from inspecting their homes and still left awaiting news about their missing loved one.", urlToImage="https://www.reuters.com/resizer/XKOq-0Q2XURddp6CBiAfbf-21tA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S5A7BVXBSFNOXKKLLZOYH5JFYE.jpg", url="https://www.reuters.com/world/us/maui-officials-urge-patience-search-missing-inches-ahead-2023-08-15/"},
            new ItemModel{Id =3, title = "U.S. band the Killers apologises for bringing Russian fan on stage in Georgia - Reuters", description = "A week after wildfire ravaged the resort town of Lahaina, traumatized Maui residents have grown weary from living off relief supplies while many are kept from inspecting their homes and still left awaiting news about their missing loved one.", urlToImage = "https://www.reuters.com/resizer/XKOq-0Q2XURddp6CBiAfbf-21tA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S5A7BVXBSFNOXKKLLZOYH5JFYE.jpg", url="https://www.reuters.com/world/europe/us-band-killers-apologises-bringing-russian-fan-stage-georgia-2023-08-16/"},
            new ItemModel{Id =4, title = "Trump expected to be booked at Fulton County jail, sheriff says - CNN", description="Former President Donald Trump is expected to surrender at the Fulton County jail, the local sheriff said Tuesday in a statement, along with the other 18 co-defendants charged on Monday in the Georgia 2020 election subversion case.", urlToImage = "https://media.cnn.com/api/v1/images/stellar/prod/230814093833-04-donald-trump-080423.jpg?c=16x9&q=w_800,c_fill", url= "https://www.cnn.com/2023/08/15/politics/fulton-county-jail-trump/index.html"}
        };

        [HttpGet]
        public ItemModel[] Get(int id)
        {
            ItemModel[] items = Items.Where(i => i.Id == id).ToArray();
            return items;
        }
    }
}