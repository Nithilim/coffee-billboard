using Domain.Models;
using System;
using System.Collections.Generic;
using System.Runtime.Caching;
using System.Threading.Tasks;

namespace Persistence
{
    public class InMemoryRepository<T> where T : BaseModel {
        private readonly ObjectCache _cache;
        private readonly string _className;
        private List<T> items;

        public InMemoryRepository() {
            _cache = MemoryCache.Default;
            _className = typeof(T).Name;
            items = _cache[_className] as List<T>;
            if (items == null)
                items = new List<T>();
        }

        public void Commit()
        {
            _cache[_className] = items;
        }

        public Task<List<T>> Collection()
        {
            return Task.Run(() => items);
        }

        public Task<T> Find(Guid id)
        {
            return Task.Run(() => items.Find(i => i.Id == id));
        }

        public Task Add(T item)
        {
            return Task.Run(() => items.Add(item));
        }

        public void Remove(Guid id)
        {
            var item = items.Find(i => i.Id == id);
            if (item != null)
                items.Remove(item);
        }
    }
}
