using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;

namespace Persistence
{
    public class InMemoryRepository<T> where T : BaseModel
    {
        private readonly ObjectCache _cache;
        private readonly string _className;
        private List<T> items;

        public InMemoryRepository()
        {
            _cache = MemoryCache.Default;
            _className = typeof(T).Name;
            items = _cache[_className] as List<T>;
        }

        public void Commit()
        {
            _cache[_className] = items;
        }

        public IQueryable<T> Collection()
        {
            return items.AsQueryable();
        }

        public T Find(Guid id)
        {
            return items.Find(i => i.Id == id);
        }

        public void Add(T item)
        {
            items.Add(item);
        }

        public void Remove(Guid id)
        {
            var item = items.Find(i => i.Id == id);
            if (item != null)
                items.Remove(item);
        }
    }
}
