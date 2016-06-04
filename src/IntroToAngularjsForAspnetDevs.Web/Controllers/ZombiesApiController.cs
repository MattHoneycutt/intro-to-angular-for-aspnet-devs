using System.Threading;
using System.Web.Http;
using IntroToAngularjsForAspnetDevs.Web.Models;

namespace IntroToAngularjsForAspnetDevs.Web.Controllers
{
    [RoutePrefix("api/Zombies")]
    public class ZombiesApiController : ApiController
    {
        [HttpGet, Route("")]
        public IHttpActionResult Get()
        {
            Thread.Sleep(2000);
            var zombies = new[]
            {
                new ZombieViewModel
                {
                    Id = "d3c6c8fe-2e80-4334-b91b-1975d9642d76",
                    Location = "2206 Ruskin Alley",
                    IncidentType = "largeSwarm",
                    ReportedBy = "Elizabeth Lee",
                    ReportedAt = "2016-06-08T01:13:16Z"
                },
                new ZombieViewModel
                {
                    Id = "28ea7ca7-9b91-4d9f-a576-f115ea59e867",
                    Location = "96107 Northfield Junction",
                    IncidentType = "infected",
                    ReportedBy = "Raymond Reynolds",
                    ReportedAt = "2016-06-09T08:31:24Z"
                },
                new ZombieViewModel
                {
                    Id = "d082fbb6-a6b1-46e5-bb1e-87c70783375e",
                    Location = "5953 Sycamore Trail",
                    IncidentType = "smallSwarm",
                    ReportedBy = "Rebecca Phillips",
                    ReportedAt = "2016-06-08T00:19:53Z"
                },
                new ZombieViewModel
                {
                    Id = "1d6c276e-a268-4a73-acd6-3afa53ed9f3a",
                    Location = "6 Jana Circle",
                    IncidentType = "largeSwarm",
                    ReportedBy = "Doris Clark",
                    ReportedAt = "2016-06-09T22:59:02Z",
                    Notes = "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby."
                },
                new ZombieViewModel
                {
                    Id = "1a4c74be-59af-45fb-ab1c-4026e4ffc3d9",
                    Location = "632 Rockefeller Park",
                    IncidentType = "largeSwarm",
                    ReportedBy = "Catherine Ryan",
                    ReportedAt = "2016-06-08T09:49:15Z"
                },
                new ZombieViewModel
                {
                    Id = "242783b4-5a09-4d4f-99a2-892d12e8e866",
                    Location = "632 Everett Park",
                    IncidentType = "smallSwarm",
                    ReportedBy = "Theresa Lane",
                    ReportedAt = "2016-06-09T08:52:37Z"
                },
                new ZombieViewModel
                {
                    Id = "b571f316-9b3f-4a6c-8986-0808c19965aa",
                    Location = "20210 Macpherson Street",
                    IncidentType = "smallSwarm",
                    ReportedBy = "Todd Foster",
                    ReportedAt = "2016-06-08T06:25:21Z"
                },
                new ZombieViewModel
                {
                    Id = "107c50ff-665c-4611-a910-3ed8a4eda5a3",
                    Location = "816 Barby Terrace",
                    IncidentType = "smallSwarm",
                    ReportedBy = "Scott Gomez",
                    ReportedAt = "2016-06-09T17:03:59Z"
                },
                new ZombieViewModel
                {
                    Id = "ed02cb72-9d63-4a6b-a12a-2ac4f9be6294",
                    Location = "8091 Service Terrace",
                    IncidentType = "single",
                    ReportedBy = "Joyce Thomas",
                    ReportedAt = "2016-06-08T13:49:18Z"
                },
                new ZombieViewModel
                {
                    Id = "7972bad2-4543-4f6f-a690-158db1bb7ef4",
                    Location = "3366 John Wall Street",
                    IncidentType = "smallSwarm",
                    ReportedBy = "Jesse Franklin",
                    ReportedAt = "2016-06-09T04:44:49Z"
                },
                new ZombieViewModel
                {
                    Id = "b6cef47a-33ef-473e-b562-f2a8cbf23760",
                    Location = "753 Pepper Wood Trail",
                    IncidentType = "infected",
                    ReportedBy = "Thomas Sanchez",
                    ReportedAt = "2016-06-08T11:47:47Z"
                },
                new ZombieViewModel
                {
                    Id = "66abf360-6c82-4d0b-9e70-947317adfb85",
                    Location = "0 Reindahl Junction",
                    IncidentType = "herd",
                    ReportedBy = "Stephanie Harris",
                    ReportedAt = "2016-06-09T12:15:47Z"
                }
            };

            return Ok(zombies);
        }
    }
}